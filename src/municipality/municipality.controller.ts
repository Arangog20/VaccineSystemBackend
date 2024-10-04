import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MunicipalityService } from './municipality.service';
import { CreateMunicipalityDto } from './dto/create-municipality.dto';
import { UpdateMunicipalityDto } from './dto/update-municipality.dto';

@Controller('municipality')
export class MunicipalityController {
  constructor(private readonly municipalityService: MunicipalityService) {}

  @Post('/create')
  create(@Body() createMunicipalityDto: CreateMunicipalityDto) {
    return this.municipalityService.create(createMunicipalityDto);
  }

  @Get(':id/average-age')
  async getAverageAge(@Param('id') municipalityId: number): Promise<string> {
    return await this.municipalityService.calculateAverageAge(municipalityId);
  }

  @Get()
  findAll() {
    return this.municipalityService.findAll();
  }

  @Get('/find/:municipality')
  findOneMunicipality(@Param('municipality') municipality: number) {
    return this.municipalityService.findOneMunicipality(municipality);
  }
}
