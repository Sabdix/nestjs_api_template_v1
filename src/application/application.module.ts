import { Module } from '@nestjs/common';
import { HealthQueryHandler } from './handlers/queries/health.query.handler';
import { JwtModule } from '@nestjs/jwt';
import { AuthenticateCommandHandler } from './handlers/commands/authenticate.command.handler';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_KEY,
      signOptions: { expiresIn: '120s' },
    }),
  ],
  providers: [HealthQueryHandler, AuthenticateCommandHandler],
  exports: [HealthQueryHandler, AuthenticateCommandHandler],
})
export class ApplicationModule {}
