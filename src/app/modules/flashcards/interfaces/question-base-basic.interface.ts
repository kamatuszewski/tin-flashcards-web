import { EStatus } from '../enums/status.enum';
import { IUserBasic } from './user-basic.interface';

export interface IQuestionBaseBasic {
  author: IUserBasic;
  created_at: string;
  description?: string;
  id_flashcardbase: number;
  status: EStatus;
  title: string;
  update_at: string;
}
