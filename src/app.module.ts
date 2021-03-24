import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// rootモジュール
@Module({
  imports: [], //他のモジュール追加する
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
