import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import {
  ApiBadRequestResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthenticateCommand } from 'src/domain/cqrs/commands/authenticate.command';
import { AuthTokenDto } from 'src/domain/dtos/auth.token.dto';
import { AuthenticateDto } from 'src/domain/dtos/autheticate.dto';
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private commandBus: CommandBus) {}

  @Post()
  @ApiOperation({ summary: 'Endpoint for authenticate a user' })
  @ApiResponse({
    status: 200,
    description: 'OK',
    type: () => AuthTokenDto,
  })
  @ApiBadRequestResponse()
  async auth(@Body() request: AuthenticateDto) {
    return this.commandBus.execute(
      new AuthenticateCommand(request.user, request.password),
    );
  }
}
