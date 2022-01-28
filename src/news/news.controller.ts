import { Controller, Get, Param, Query } from '@nestjs/common'

@Controller('news')
export class NewsController {
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
    return '模糊匹配';
  }
}
