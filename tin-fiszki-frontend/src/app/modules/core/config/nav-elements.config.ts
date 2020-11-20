import { INavElementConfig } from '../interfaces/nav-element-config.interface';

export const navElementsConfig: INavElementConfig[] = [
  /**
   * for not authorized
   */
  {
    label: 'LOG_IN',
    redirectTo: ['auth', 'log-in'],
    forAuthorized: false,
  }, {
    label: 'SIGN_UP',
    redirectTo: ['auth', 'sign-up'],
    forAuthorized: false,
  },

  /**
   * for authorized
   */

  {
    label: 'CATEGORY_LIST',
    redirectTo: ['flashcards'],
    forAuthorized: true
  }
];
