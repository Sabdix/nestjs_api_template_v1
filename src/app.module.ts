import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { ApplicationModule } from './application/application.module';
import { InfraestructureModule } from './infraestructure/infraestructure.module';

@Module({
  imports: [ApiModule, ApplicationModule, InfraestructureModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
