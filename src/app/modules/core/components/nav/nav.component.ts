import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from '../../../auth/auth.service';
import { navElementsConfig } from '../../config/nav-elements.config';
import { ESpecialActions } from '../../enums/special-actions.enum';
import { ETypeVisible } from '../../enums/type-visible.enum';
import { INavElementConfig } from '../../interfaces/nav-element-config.interface';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {
  public navElements: INavElementConfig[] = [];
  private $onDestroy = new Subject<void>();
  private authorized: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  public logout(): void {

  }

  public ngOnDestroy(): void {
    this.$onDestroy.next();
    this.$onDestroy.complete();
  }

  public ngOnInit(): void {
    this.authService.selectToken().pipe(takeUntil(this.$onDestroy)).subscribe(() => {
      this.authorized = this.authService.isAuthorized();
      this.navElements = navElementsConfig.filter((element: INavElementConfig): boolean => this.checkVisibleButton(element.visibleType));
    })
  }

  public redirectTo(path: string[]): void {
    if (path.includes(ESpecialActions.LOG_OUT)) {
      this.authService.logout();
      return;
    }
    this.router.navigate(path).then();
  }

  private checkVisibleButton(type: ETypeVisible): boolean {
    if (this.authorized) {
      return [ETypeVisible.LOGGED_IN, ETypeVisible.EVERY].includes(type);
    }
    return [ETypeVisible.NOT_LOGGED_IN, ETypeVisible.EVERY].includes(type);
  }
}
