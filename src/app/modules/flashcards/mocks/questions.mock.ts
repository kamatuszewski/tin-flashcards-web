import { ICategoryBasic } from '../interfaces/category-basic.interface';
import { EStatus } from '../enums/status.enum';

export const questionsMock: ICategoryBasic[] = [
  {
    id: 0,
    author: {
      id: 1,
      login: 'login_1'
    },
    title: 'Kategoria 1',
    description: 'Jakiś bardzo krótki opis. Tutaj będzie opis tego zbioru pytań',
    created_date: 'asdsadasdasd',
    status: EStatus.PRIVATE
  },
  {
    id: 1,
    author: {
      id: 2,
      login: 'login_2'
    },
    title: 'Kategoria 2',
    description: 'Jakiś bardzo krótki opis. Tutaj będzie opis tego zbioru pytań',
    created_date: 'asdsadasdasd',
    status: EStatus.PUBLIC
  },
  {
    id: 2,
    author: {
      id: 3,
      login: 'login_3'
    },
    title: 'Kategoria 3',
    description: 'Jakiś bardzo krótki opis. Tutaj będzie opis tego zbioru pytań',
    created_date: 'asdsadasdasd',
    status: EStatus.IN_REVIEW
  }
];
