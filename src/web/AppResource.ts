import { Controller, Get } from '@nestjs/common';
import { AppService } from '../service/AppService';

@Controller()
export class AppResource {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
