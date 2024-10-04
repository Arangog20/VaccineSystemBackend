import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateDepartmentDto  {
    @IsString()
    @IsOptional()
    name?: string;
  
    @IsInt()
    @IsOptional()
    municipality?: number;
}
