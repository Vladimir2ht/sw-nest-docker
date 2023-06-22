import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useStaticAssets(join(__dirname, '..', 'public'))
  await app.listen(3000);
  console.log('Started at port: ' + await app.getUrl())
}
bootstrap();