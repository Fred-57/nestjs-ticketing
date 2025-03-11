import { PartialType } from '@nestjs/mapped-types';
import { CreateOrUpdateUserDto } from './create-update-user.dto';

export class UpdateUserDto extends PartialType(CreateOrUpdateUserDto) {}
