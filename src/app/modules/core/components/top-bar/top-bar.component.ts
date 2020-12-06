import { Component } from '@angular/core';
import { FadeAnimations } from '../../../share/config/animations.config';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  animations: FadeAnimations
})
export class TopBarComponent {
  public visibilitedSearch: boolean = false;

  constructor() { }

  public changeSearchVisibility(): void {
    this.visibilitedSearch = !this.visibilitedSearch;
  }
}
