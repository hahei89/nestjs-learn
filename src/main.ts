import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
const listenPort = 3000;
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets('public'); //配置静态资源目录
  await app.listen(listenPort, () => {
    console.log('在3000端口启动');
  });
}
bootstrap();
