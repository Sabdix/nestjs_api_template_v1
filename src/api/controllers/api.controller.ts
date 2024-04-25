import { Controller, Get } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HealthQuery } from 'src/domain/cqrs/queries/health.query';
import { WsResponse } from 'src/domain/dtos/ws.response.dto';

@ApiTags('Health')
@Controller()
export class ApiController {
  constructor(private commandBus: CommandBus) {}

  @Get()
  @ApiOperation({ summary: 'Endpoint for verifying the health of the API' })
  @ApiResponse({ status: 200, description: 'OK', type: WsResponse<boolean> })
  async health(): Promise<WsResponse<boolean>> {
    return this.commandBus.execute(new HealthQuery());
  }
}
