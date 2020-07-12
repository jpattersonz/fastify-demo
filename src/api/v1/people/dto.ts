import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { validationMetadatasToSchemas } from 'class-validator-jsonschema';

export class CreatePersonDto {
  @IsString()
  @IsOptional()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string
}

// Create JsonSchema from the TS DTO
// If there are multiple classes in the file, itll on this object
export const createPersonSchema = validationMetadatasToSchemas().CreatePersonDto;
console.log(createPersonSchema);
