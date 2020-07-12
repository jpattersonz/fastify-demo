import { IsNotEmpty, IsString } from 'class-validator';
import { validationMetadatasToSchemas } from 'class-validator-jsonschema';

export class CreatePersonDto {
  id: string;
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;
}

// Create JsonSchema from the TS DTO
// If there are multiple classes in the file, itll on this object
export const createPersonSchema = validationMetadatasToSchemas().CreatePersonDto;
