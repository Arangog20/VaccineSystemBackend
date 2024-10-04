import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { VaccinesService } from './vaccine.service';
import { CreateVaccineDto } from './dto/create-vaccine.dto';
import { UpdateVaccineDto } from './dto/update-vaccine.dto';
import { VaccineEntity } from './entities/vaccine.entity';
import { ChildEntity } from 'src/children/entities/child.entity';

@Controller('vaccine')
export class VaccinesController {
  constructor(private readonly vaccinesService: VaccinesService) {}

  @Post('create')
  async create(@Body() createVaccineDto: CreateVaccineDto): Promise<VaccineEntity> {
    return this.vaccinesService.create(createVaccineDto);
  }

  @Put(':childId/vaccines/:vaccineId')
  async addVaccineToChild(
    @Param('childId') childId: number,
    @Param('vaccineId') vaccineId: number,
  ): Promise<ChildEntity> {
    return this.vaccinesService.addVaccineToChild(childId, vaccineId);
  }
}
