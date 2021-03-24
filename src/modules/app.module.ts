import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';

// rootモジュール
@Module({
  imports: [], //他のモジュール追加する
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
