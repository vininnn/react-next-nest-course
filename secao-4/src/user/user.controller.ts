import { Controller, Get, Param } from '@nestjs/common';
import { CustomParseIntPipe } from '../commom/pipes/custom-parse-int-pipe.pipe';

@Controller('user')
export class UserController {
  @Get(':id')
  findOne(@Param('id', CustomParseIntPipe) id: number) {
    return `Hello UserController ${id}`;
  }
}
