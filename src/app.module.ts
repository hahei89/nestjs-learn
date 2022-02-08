import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleController } from './article/article.controller';
import { UserController } from './user/user.controller';
import { NewsController } from './news/news.controller';
import { NewsService } from './news/news.service';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
  controllers: [
    AppController,
    ArticleController,
    UserController,
    NewsController,
  ],
  providers: [AppService, NewsService],
})
export class AppModule {}
