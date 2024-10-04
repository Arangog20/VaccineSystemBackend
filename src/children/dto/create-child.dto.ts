import { IsDate, IsNotEmpty,IsString, IsNumber, IsArray } from "class-validator";

export class CreateChildDto {


  @IsString()
  @IsNotEmpty()
  name: string;

  @IsDate()
  @IsNotEmpty()
  birthday: Date;

  @IsNumber()
  municipalityId: number;
    
}
