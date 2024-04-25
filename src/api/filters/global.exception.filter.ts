import {
  Catch,
  ExceptionFilter,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { ENVIRONMENTS } from 'src/domain/catalogs/environment.catalog';
import { WsResponse } from 'src/domain/dtos/ws.response.dto';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  constructor(private configService: ConfigService) {}

  catch(error: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status =
      error instanceof HttpException
        ? error.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    response
      .status(error instanceof HttpException ? HttpStatus.OK : status)
      .json(
        WsResponse.buildErrorResponse(
          status,
          error.message,
          this.configService.get<string>('APP_ENV') == ENVIRONMENTS.DEVELOPMENT
            ? error
            : null,
        ),
      );
  }
}
