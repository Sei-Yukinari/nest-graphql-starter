import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller('apps')
export class AppController {
  // serviceクラスのDI
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
