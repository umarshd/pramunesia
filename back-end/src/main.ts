import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  const configSwagger = new DocumentBuilder()
    .setTitle('Pramunesia Indonesia Documentation')
    .setDescription('Documentation for API Pramunesia')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const configCustomSwagger: SwaggerCustomOptions = {
    swaggerOptions: { docExpansion: 'none' },
  };

  const doc = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('doc', app, doc, configCustomSwagger);

  await app.listen(3010);
}
bootstrap();
