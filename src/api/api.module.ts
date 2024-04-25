import { Module } from '@nestjs/common';
import { GlobalExceptionFilter } from './filters/global.exception.filter';
import { APP_FILTER } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { ApplicationModule } from 'src/application/application.module';
import { AuthController } from './controllers/auth.controller';
import { ApiController } from './controllers/api.controller';

@Module({
  imports: [ConfigModule.forRoot(), CqrsModule, ApplicationModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
  ],
  controllers: [ApiController, AuthController],
})
export class ApiModule {}
