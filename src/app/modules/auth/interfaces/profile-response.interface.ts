import { ETypeRole } from '../../core/enums/type-role.enum';

export interface IProfileResponse {
  role: ETypeRole;
  userId: string;
  username: string;
}
