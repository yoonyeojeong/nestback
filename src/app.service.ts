import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<p style="color: blue; font-weight: bold;">Hello NestJS!</p>';
  }
}
