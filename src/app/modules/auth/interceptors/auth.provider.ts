import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreService } from '../../core/core.service';
import { AuthService } from '../auth.service';
import { AuthInterceptor } from './auth.interceptor';

export const authProviderInjectionInterceptor = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true,
  deps: [AuthService, CoreService]
};
