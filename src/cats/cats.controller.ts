import {
  Body,
  Controller,
  Get,
  ParseIntPipe,
  Post,
  UseGuards,
  Param,
} from '@nestjs/common';
import { Roles } from 'src/common/decorators/roles.decorator';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interface/cat.interface';
import { RolesGuard } from '../common/guards/roles.guard';

@UseGuards(RolesGuard)
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @Roles('admin')
  async create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  findOne(@Param('id', new ParseIntPipe()) id: number) {
    // get by id logic
  }
}
