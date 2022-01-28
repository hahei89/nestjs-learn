import { Body, Controller, Get, Post, Query, Request } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  index() {
    return '用户中心';
  }
  // 通过@Query()装饰器获取传参
  @Get('add')
  addData(@Query() query) {
    console.log('query ==>', query);

    return '增加数据';
  }

  @Get('edit')
  editData(@Request() req) {
    console.log(req.query);
    return '编辑数据';
  }

  @Post('create')
  createData(@Body() body) {
    console.log(body);
    return '创建数据';
  }

  @Get('cookie')
  getCookie(@Request() req) {
    console.log(req.cookies.username);

    return req.cookies.username;
  }
}
