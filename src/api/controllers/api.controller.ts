import { Controller, Get } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { HealthQuery } from 'src/domain/cqrs/queries/health.query';
import { WsResponse } from 'src/domain/dtos/ws.response.dto';

@Controller()
export class ApiController {
  constructor(private commandBus: CommandBus) {}

  @Get()
  async health(): Promise<WsResponse<boolean>> {
    return this.commandBus.execute(new HealthQuery());
  }
}
