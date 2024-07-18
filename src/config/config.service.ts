import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvService {
  constructor(private configService: ConfigService) {}

  getPortNumber() {
    const port = this.configService.get<number>('NEST_PORT');
    return port;
  }
  getDatabaseConfig() {
    const host = this.configService.get<string>('DATABASE_HOST');
    const dbPort = this.configService.get<number>('DATABASE_PORT');
    const user = this.configService.get<string>('DATABASE_USER');
    const password = this.configService.get<string>('DATABASE_PASSWORD');

    return {
      host,
      dbPort,
      user,
      password,
    };
  }
}
