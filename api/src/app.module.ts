import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { url } from 'inspector';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities:true,
      synchronize:true
    }),
    BookModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
