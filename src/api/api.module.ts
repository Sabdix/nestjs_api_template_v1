import { Module } from '@nestjs/common';
import { ApiController } from './controllers/api/api.controller';
import { GlobalExceptionFilter } from './filters/global.exception.filter';
import { APP_FILTER } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
  ],
  controllers: [ApiController],
})
export class ApiModule {}
