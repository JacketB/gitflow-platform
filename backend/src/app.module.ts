import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModuleModule } from './modules/database-module/database-module.module';

@Module({
  imports: [DatabaseModuleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
