import { DatabaseModule } from '@infra/database/database.module';
import { HttpModule } from '@infra/http/http.module';
import { MessagingModule } from '@infra/messaging/messaging.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [HttpModule, DatabaseModule, MessagingModule],
})
export class InfraModule {}