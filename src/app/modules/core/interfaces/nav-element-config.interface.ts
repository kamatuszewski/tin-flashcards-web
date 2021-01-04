import { ETypeVisible } from '../enums/type-visible.enum';

export interface INavElementConfig {
  label: string;
  redirectTo?: string[];
  visibleType: ETypeVisible;
}
