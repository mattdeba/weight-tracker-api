# Étape 1 : build de l’app NestJS
FROM node:18-alpine AS build

# Dossier de travail
WORKDIR /usr/src/app

# Installer uniquement les dépendances nécessaires pour le build
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copier le code source et compiler
COPY . .
RUN npm run build

# Étape 2 : exécution
FROM node:18-alpine

WORKDIR /usr/src/app

# Copier uniquement ce qui est nécessaire à l’exécution
COPY package*.json ./
RUN npm install --only=production --legacy-peer-deps

# Copier les fichiers buildés depuis l’étape 1
COPY --from=build /usr/src/app/dist ./dist

# Port exposé (par défaut NestJS tourne sur 3000)
EXPOSE 3000

# Commande de lancement
CMD ["node", "dist/main"]
