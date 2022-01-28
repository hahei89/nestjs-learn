import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('default/index')
  getHello(): Record<string, unknown> {
    return { name: '展示' };
  }

  @Get('news')
  getNews(): string {
    return this.appService.getNews();
  }
}
