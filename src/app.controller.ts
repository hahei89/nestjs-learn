import { Controller, Get, Render, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('default/index')
  getHello(@Request() req): Record<string, unknown> {
    // 设置session
    req.session.username = '哈哈哈';
    return { name: '展示' };
  }

  @Get('news')
  getNews(@Request() req): string {
    console.log(req.session.username);

    return this.appService.getNews();
  }
}
