import { ICategoryBasic } from '../interfaces/category-basic.interface';
import { EStatus } from '../enums/status.enum';

export const categoriesMock: ICategoryBasic[] = [
  {
    id: 1,
    author: {
      id: 1,
      login: 'login_1'
    },
    title: 'Kategoria 1',
    created_date: 'asdsadasdasd',
    status: EStatus.PRIVATE
  },
  {
    id: 2,
    author: {
      id: 2,
      login: 'login_2'
    },
    title: 'Kategoria 2',
    created_date: 'asdsadasdasd',
    status: EStatus.PUBLIC
  },
  {
    id: 3,
    author: {
      id: 3,
      login: 'login_3'
    },
    title: 'Kategoria 3',
    created_date: 'asdsadasdasd',
    status: EStatus.IN_REVIEW
  },
  {
    id: 4,
    author: {
      id: 4,
      login: 'login_4'
    },
    title: 'Kategoria 4',
    created_date: 'asdsadasdasd',
    status: EStatus.PUBLIC
  }
];
