import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {
  findAll() {
    return [
      {
        title: '新闻111',
      },
    ];
  }
}
