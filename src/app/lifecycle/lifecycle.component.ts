import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LifecycleComponent implements OnInit {

  isSh = false;
  nm: string;

  constructor() { }

  ngOnInit() {
  }

  onDt() {
    this.nm = new Date().toString();
  }
}
