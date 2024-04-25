import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { AuthenticateCommand } from 'src/domain/cqrs/commands/authenticate.command';
import { AuthenticateDto } from 'src/domain/dtos/autheticate.dto';

@Controller('auth')
export class AuthController {
  constructor(private commandBus: CommandBus) {}

  @Post()
  async auth(@Body() request: AuthenticateDto) {
    return this.commandBus.execute(
      new AuthenticateCommand(request.user, request.password),
    );
  }
}
