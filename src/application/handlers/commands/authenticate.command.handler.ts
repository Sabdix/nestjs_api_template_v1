import { UnauthorizedException } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { JwtService } from '@nestjs/jwt';
import { AuthenticateCommand } from 'src/domain/cqrs/commands/authenticate.command';
import { AuthTokenDto } from 'src/domain/dtos/auth.token.dto';
import { WsResponse } from 'src/domain/dtos/ws.response.dto';

@CommandHandler(AuthenticateCommand)
export class AuthenticateCommandHandler
  implements ICommandHandler<AuthenticateCommand>
{
  constructor(private jwtService: JwtService) {}

  async execute(command: AuthenticateCommand) {
    // Get User and Compate
    if (command.password != 'Abcde1') throw new UnauthorizedException();
    const payload = { sub: command.user, username: command.user };
    return WsResponse.buildOkResponse<AuthTokenDto>({
      accessToken: await this.jwtService.signAsync(payload),
    });
  }
}
