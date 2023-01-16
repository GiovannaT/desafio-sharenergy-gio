import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bodyParser: false });
  app.enableCors();

  await app.listen(4000);
}
bootstrap();
