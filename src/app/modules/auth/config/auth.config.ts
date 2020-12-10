import { IAuthContent } from '../interfaces/auth-content.interface';

export const loginContent: IAuthContent = {
  pathIcon: 'assets/images/login.png',
  header: 'AUTH.LOG_IN.HEADER',
  description: 'AUTH.LOG_IN.DESCRIPTION',
  actions: [
    {
      label: 'AUTH.NAVIGATION.SIGN_UP',
      path: ['auth', 'sign-up']
    }
  ]
};

export const signupContent: IAuthContent = {
  pathIcon: 'assets/images/signup.png',
  header: 'AUTH.SIGN_UP.HEADER',
  description: 'AUTH.SIGN_UP.DESCRIPTION',
  actions: [
    {
      label: 'AUTH.NAVIGATION.LOG_IN',
      path: ['auth', 'log-in']
    }
  ]
};

export const remindPasswordContent: IAuthContent = {
  pathIcon: 'assets/images/remind-password.png',
  header: 'AUTH.REMIND_PASSWORD.HEADER',
  description: 'AUTH.REMIND_PASSWORD.DESCRIPTION',
  actions: [
    {
      label: 'AUTH.NAVIGATION.LOG_IN',
      path: ['auth', 'log-in']
    },
    {
      label: 'AUTH.NAVIGATION.SIGN_UP',
      path: ['auth', 'sign-up']
    }
  ]
};
