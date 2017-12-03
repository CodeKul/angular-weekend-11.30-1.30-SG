import { Input, OnChanges } from '@angular/core';
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
  cnd: boolean;

  constructor(
    private tmRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {
    console.log(vcRef);
  }
  ngOnChanges() {
     if (!this.cnd) {
      this.vcRef.createEmbeddedView(this.tmRef);
    }else {
      this.vcRef.clear();
    }
  }
}
