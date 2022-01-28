import { Controller, Get, Response } from '@nestjs/common';

@Controller('article')
export class ArticleController {
  @Get()
  index(@Response() res) {
    // 使用res不能再用return
    res.cookie('username', '我是cookie', {
      maxAge: 1000 * 60 * 10,
      httpOnly: true,
    });
    // return '我是一个文章页面';
    res.send('我是一个文章页面');
  }
  @Get('add')
  add() {
    return '增加新闻';
  }
}
