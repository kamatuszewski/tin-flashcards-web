import { IAuthContentAction } from './auth-content-action.interface';

export interface IAuthContent {
  pathIcon: string;
  header: string;
  description?: string;
  actions?: IAuthContentAction[];
}
