import { EQuestionType } from '../enums/question-type.enum';
import { IAnswer } from './answer.interface';

export interface IQuestion {
  answers: IAnswer[];
  created_date?: string;
  id: number;
  modification_date?: string;
  title: string;
  type: EQuestionType;
}
