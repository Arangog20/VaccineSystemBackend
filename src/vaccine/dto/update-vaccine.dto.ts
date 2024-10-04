
import {  IsOptional, IsString } from 'class-validator';

export class UpdateVaccineDto {
    @IsString()
    @IsOptional()
    name?: string;
  
    @IsString()
  @IsOptional()
  minAge?: string;

  @IsString()
  @IsOptional()
  maxAge?: string;

  @IsString()
  @IsOptional()
  children?: string; 
} 
