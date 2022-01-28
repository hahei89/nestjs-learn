import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';

const listenPort = 3000;
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  //配置静态资源目录
  app.useStaticAssets('public', {
    prefix: 'static', // 设置虚拟路径
  });
  // 设置模板引擎
  app.setBaseViewsDir('views');
  app.setViewEngine('ejs');
  // 配置cookie中间件
  app.use(cookieParser());
  app.use(
    session({
      secret: 'keyboard cat',
      cookie: { maxAge: 60000 },
    }),
  );
  await app.listen(listenPort, () => {
    console.log('在3000端口启动');
  });
}
bootstrap();
