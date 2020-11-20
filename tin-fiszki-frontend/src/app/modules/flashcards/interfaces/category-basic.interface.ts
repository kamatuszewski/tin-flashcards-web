import { IUserBasic } from './user-basic.interface';
import { EStatus } from '../enums/status.enum';

export interface ICategoryBasic {
  id: number;
  author: IUserBasic;
  title: string;
  created_date: string;
  status: EStatus;
  description?: string;
}
