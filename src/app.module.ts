import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WeightModule } from './weight/weight.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // type of our database
      host: process.env.DATABASE_HOST || 'localhost', // database host
      port: parseInt(process.env.DATABASE_PORT) || 5432,
      username: process.env.DATABASE_USER || 'postgres',
      password: process.env.DATABASE_PASSWORD || 'pass123',
      database: process.env.DATABASE_NAME || 'trackweight', // name of our database,
      autoLoadEntities: true, // models will be loaded automatically
      synchronize: true, // your entities will be synced with the database(recommended: disable in prod)
    }),
    WeightModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
