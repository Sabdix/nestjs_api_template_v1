import {
  RESPONSE_CODES_CATALOG,
  RESPONSE_MESSAGE_CATALOG,
} from '../catalogs/response.catalog';

export class WsResponse<T> {
  constructor(
    public statusCode: number,
    public message: string,
    public data: T,
  ) {}

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
