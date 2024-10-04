import { PartialType } from '@nestjs/mapped-types';
import { CreateChildDto } from './create-child.dto';
import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateChildDto  {
  @IsString()
  @IsOptional()
  id?: string;
  
    @IsString()
  @IsOptional()
  name?: string;

  @IsDate()
  @IsOptional()
  birthday?: Date;

  @IsString()
  @IsOptional()
  municipalityId?: string;

  @IsString()
  @IsOptional()
  vaccines:string;
}
