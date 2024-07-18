import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // NestJS 의존성 주입 컨테이너를 사용하여 MyService 인스턴스를 가져옴
  const myService = app.get(EnvService);
  // getPortNumber 메서드를 사용하여 포트 번호를 가져옴
  const port = myService.getPortNumber();
  // 포트 번호로 애플리케이션 시작
  await app.listen(port);
  console.log(`Listening on port ${port}`);
}
bootstrap();
