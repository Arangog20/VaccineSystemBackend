import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateMunicipalityDto  {
    @IsString()
    @IsOptional()
    name?: string;
  
    @IsString()
    @IsOptional()
    department?: string;

    @IsString()
    @IsOptional()
    children?:string;
}
