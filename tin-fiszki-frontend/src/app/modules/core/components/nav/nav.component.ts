import { Component } from '@angular/core';
import { navElementsConfig } from '../../config/nav-elements.config';
import { INavElementConfig } from '../../interfaces/nav-element-config.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  public authorized: boolean = false;
  public navElements: INavElementConfig[] =
    navElementsConfig.filter((element: INavElementConfig): boolean => element.forAuthorized === this.authorized);
  constructor(private router: Router) { }

  public redirectTo(path: string[]): void {
    this.router.navigate(path).then();
  }
}
