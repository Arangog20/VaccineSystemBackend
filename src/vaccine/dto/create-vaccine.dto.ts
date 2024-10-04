import { IsInt, IsOptional, IsString } from "class-validator";

export class CreateVaccineDto {
  @IsString()
  name: string;

  @IsInt()
  minAge: number;

  @IsOptional()
  @IsInt()
  maxAge?: number;
}
