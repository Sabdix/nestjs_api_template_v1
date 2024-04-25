import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { HealthQuery } from 'src/domain/cqrs/queries/health.query';
import { WsResponse } from 'src/domain/dtos/ws.response.dto';

@CommandHandler(HealthQuery)
export class HealthQueryHandler implements ICommandHandler<HealthQuery> {
  execute(command: HealthQuery): Promise<any> {
    return new Promise<WsResponse<boolean>>((resolve) => {
      resolve(WsResponse.buildOkResponse(true));
    });
  }
}
