import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const listenPort = 3000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(listenPort, () => {
    console.log('在3000端口启动');
  });
}
bootstrap();
