import { ETypeRole } from '../enums/type-role.enum';
import { ETypeVisible } from '../enums/type-visible.enum';

export interface INavElementConfig {
  label: string;
  redirectTo?: string[];
  visibleFor?: ETypeRole;
  visibleType: ETypeVisible;
}
