import { ICategoryBasic } from '../interfaces/category-basic.interface';
import { EStatus } from '../enums/status.enum';

export const questionsMock: ICategoryBasic[] = [
  {
    id_category: 0,
    author: {
      id_user: 1,
      login: 'login_1'
    },
    title: 'Kategoria 1',
    description: 'Jakiś bardzo krótki opis. Tutaj będzie opis tego zbioru pytań',
    createdDate: 'asdsadasdasd',
    status: EStatus.PRIVATE
  },
  {
    id_category: 1,
    author: {
      id_user: 2,
      login: 'login_2'
    },
    title: 'Kategoria 2',
    description: 'Jakiś bardzo krótki opis. Tutaj będzie opis tego zbioru pytań',
    createdDate: 'asdsadasdasd',
    status: EStatus.PUBLIC
  },
  {
    id_category: 2,
    author: {
      id_user: 3,
      login: 'login_3'
    },
    title: 'Kategoria 3',
    description: 'Jakiś bardzo krótki opis. Tutaj będzie opis tego zbioru pytań',
    createdDate: 'asdsadasdasd',
    status: EStatus.IN_REVIEW
  }
];
