import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  public visibilitedSearch: boolean = false;

  constructor() { }

  public ngOnInit(): void {
  }

  public changeSearchVisibility() {
    this.visibilitedSearch = !this.visibilitedSearch;
  }
}
