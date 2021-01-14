import { EStatus } from '../enums/status.enum';
import { IUserBasic } from './user-basic.interface';

export interface ICategoryBasic {
  author?: IUserBasic;
  createdDate?: string;
  description?: string;
  id_category: number;
  status?: EStatus;
  title: string;
}
