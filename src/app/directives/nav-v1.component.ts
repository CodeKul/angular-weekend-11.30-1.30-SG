import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-nav-v1',
  template: `
    <ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link" href="#">Active</a>
  </li>
  <li class="nav-item dropdown" (nv)="isSh = $event">
    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
    <div class="dropdown-menu" [class.show]="isSh">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class NavV1Component implements OnInit {

  isSh: boolean;

  constructor() { }

  ngOnInit() {
  }

}
