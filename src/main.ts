import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './config/swagger.config';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  app.use(cookieParser());

  setupSwagger(app);

  const port: number = app.get(ConfigService).get('PORT', 4000);
  console.log('hello s');
  await app.listen(port);
}

bootstrap()
  .then((): void => {
    console.log(`App has been started...`);
  })
  .catch((error: unknown): void => {
    console.log(error);

    process.exit(1);
  });
