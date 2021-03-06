import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  // rootモジュールの指定
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
