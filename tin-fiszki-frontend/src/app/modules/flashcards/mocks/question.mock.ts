import { IQuestion } from '../interfaces/question.interface';
import { EQuestionType } from '../enums/question-type.enum';

export const questionMock: IQuestion[] = [{
  id: 1,
  title: 'W którym roku była bitwa pod Grunwaldem?',
  created_date: 'created_date',
  modification_date: 'modification_date',
  type: EQuestionType.RADIO,
  answers: [{
    id: 0,
    contents: '1410',
    is_correct: true
  }, {
    id: 1,
    contents: '1411',
    is_correct: false
  }]
}, {
  id: 2,
  title: 'Z jakich pierwiatków składa się woda?',
  created_date: 'created_date',
  modification_date: 'modification_date',
  type: EQuestionType.CHECKBOX,
  answers: [{
    id: 0,
    contents: 'WODA',
    is_correct: true
  }, {
    id: 1,
    contents: 'WODÓR',
    is_correct: true
  }, {
    id: 2,
    contents: 'ZIEMNIAK',
    is_correct: false
  }]
}, {
  id: 3,
  title: '2 * 2 = ',
  created_date: 'created_date',
  modification_date: 'modification_date',
  type: EQuestionType.TEXT,
  answers: [{
    id: 0,
    contents: '4',
    is_correct: true
  }]
}];
