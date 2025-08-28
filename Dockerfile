FROM node:18-alpine

# Dossier de travail
WORKDIR /usr/src/app

# Copier package.json et installer toutes les dépendances
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copier le reste du code source
COPY . .

# Compiler le projet NestJS
RUN npm run build

# Exposer le port de l’API
EXPOSE 3000

# Lancer l'application
CMD ["node", "dist/main"]
