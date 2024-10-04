import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateDepartmentDto {
  @IsInt()
  @IsOptional()
  id: number;
     
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsOptional()
  municipalities?: number;
}
