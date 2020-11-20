import { EQuestionType } from '../enums/question-type.enum';
import { IAnswer } from './answer.interface';

export interface IQuestion {
  id: number;
  title: string;
  created_date?: string;
  modification_date?: string;
  type: EQuestionType;
  answers: IAnswer[];
}
