import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'или не педики';
  }

  getDate(): object {
    return {status: 'ok', time: new Date() };
  }
}
