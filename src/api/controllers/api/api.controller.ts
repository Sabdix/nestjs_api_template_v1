import { Controller, Get, NotFoundException } from '@nestjs/common';
import { WsResponse } from 'src/domain/dtos/ws.response.dto';

@Controller('api')
export class ApiController {
  @Get()
  async health(): Promise<WsResponse<boolean>> {
    throw new NotFoundException(null);
    return WsResponse.buildOkResponse<boolean>(true);
  }
}
