import { Input, OnInit, OnChanges } from '@angular/core';
import {
  Directive,
  TemplateRef,
  ViewContainerRef

} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[unless]'
})
export class UnlessDirective implements OnChanges {

  @Input('unless')
  isSh: boolean;

  constructor(
    private tmRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {
    console.log(vcRef);
  }
  ngOnChanges() {
     if (!this.isSh) {
      this.vcRef.createEmbeddedView(this.tmRef);
    }else {
      this.vcRef.clear();
    }
  }
}
