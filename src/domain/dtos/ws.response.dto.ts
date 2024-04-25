import { ApiProperty } from '@nestjs/swagger';
import {
  RESPONSE_CODES_CATALOG,
  RESPONSE_MESSAGE_CATALOG,
} from '../catalogs/response.catalog';

export class WsResponse<T> {
  @ApiProperty()
  statusCode: number;
  @ApiProperty()
  message: string;
  @ApiProperty()
  data: T;

  constructor(statusCode: number, message: string, data: T) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }

  static buildOkResponse<J>(data: J) {
    return new WsResponse<J>(
      RESPONSE_CODES_CATALOG.OK,
      RESPONSE_MESSAGE_CATALOG.OK,
      data,
    );
  }

  static buildErrorResponse<J>(
    statusCode: number = null,
    message: string = null,
    data: J = null,
  ) {
    return new WsResponse<J>(
      statusCode ?? RESPONSE_CODES_CATALOG.OK,
      message ?? RESPONSE_MESSAGE_CATALOG.OK,
      data,
    );
  }
}
