import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cmp-one',
  template: `
    <div class="row">
      <div class="col-md-12">
        <input type="text" (keyup)="onDark($event)">
      </div>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class CmpOneComponent implements OnInit {

  private col: string;

  @Output()
  private colored: EventEmitter<{ [key: string]: any }>;

  constructor() {
    this.colored = new EventEmitter();
  }

  ngOnInit() {
  }

  onDark(cls: string) {
    console.log(cls);
    this.colored.emit({ col: cls['target']['value'], info: 'this represents success' });
  }
}
