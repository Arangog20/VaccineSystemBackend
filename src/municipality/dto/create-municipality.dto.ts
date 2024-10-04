import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateMunicipalityDto {
    @IsInt()
    @IsOptional()
    municipality: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsNotEmpty()
  departmentId: number;

  @IsInt()
  @IsOptional()
  children?:number;
}
