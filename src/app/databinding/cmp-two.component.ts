import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-cmp-two',
  template: `
    <div class="alert" [ngClass]="stngs['col']" role="alert">
      {{stngs['info']}}
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class CmpTwoComponent implements OnInit {

  @Input()
  private stngs: { [key: string]: any };

  constructor() { }

  ngOnInit() {
  }

}
