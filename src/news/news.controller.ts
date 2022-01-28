import { Controller, Get, Param, Query } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
  // 依赖注入
  constructor(private newsService: NewsService) {}
  @Get(':id')
  index(@Param() param) {
    console.log(param);

    return '获取news';
  }

  @Get('add')
  addData(@Query('id') id) {
    console.log(id);
    return '薪资增加';
  }

  @Get('a*d')
  add(@Query('id') id) {
    console.log(id);
    return this.newsService.findAll();
  }
}
