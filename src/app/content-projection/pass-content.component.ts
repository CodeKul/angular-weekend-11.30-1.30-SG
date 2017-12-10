import {
  Component,
  OnInit,
  ViewEncapsulation,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-pass-content',
  template: `
  <div class="row">
      <div class="col-md-12">
        <ng-content></ng-content>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        This is inner content
      </div>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class PassContentComponent implements OnInit {

  @ContentChild('nm')
  nm: ElementRef;

  constructor() { }

  ngOnInit() {
  }
}
