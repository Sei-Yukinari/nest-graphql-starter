import { Injectable } from '@nestjs/common';

//providerの宣言
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
