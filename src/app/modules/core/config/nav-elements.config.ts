import { ETypeVisible } from '../enums/type-visible.enum';
import { INavElementConfig } from '../interfaces/nav-element-config.interface';
import { ESpecialActions } from '../enums/special-actions.enum';

export const navElementsConfig: INavElementConfig[] = [
  /**
   * for not authorized
   */
  , {
    label: 'CATEGORY_LIST',
    redirectTo: ['flashcards'],
    visibleType: ETypeVisible.EVERY,
  },
  {
    label: 'CREATE_QUESTIONS',
    redirectTo: ['flashcards', 'questions', 'form', 'create'],
    visibleType: ETypeVisible.LOGGED_IN
  },
  {
    label: 'CREATE_CATEGORY',
    redirectTo: ['flashcards', 'category', 'form', 'create'],
    visibleType: ETypeVisible.LOGGED_IN
  },




  /**
   * AUTH
   */

  {
    label: 'LOG_IN',
    redirectTo: ['auth', 'log-in'],
    visibleType: ETypeVisible.NOT_LOGGED_IN,
  }, {
    label: 'SIGN_UP',
    redirectTo: ['auth', 'sign-up'],
    visibleType: ETypeVisible.NOT_LOGGED_IN,
  }, {
    label: 'LOG_OUT',
    redirectTo: [ESpecialActions.LOG_OUT],
    visibleType: ETypeVisible.LOGGED_IN,
  }
];
