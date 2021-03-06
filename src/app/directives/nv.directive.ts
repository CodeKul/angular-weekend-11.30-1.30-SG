import {
  Directive,
  HostBinding,
  HostListener,
  EventEmitter,
  Output
} from '@angular/core';

@Directive({
  selector: '[nv]'
})
export class NvDirective {

  @Output(`nv`)
  clkd: EventEmitter<boolean>;

  constructor() {
    this.clkd = new EventEmitter();
  }

  @HostBinding(`class.show`)
  sh: boolean;

  @HostListener('click')
  onNvClk() {
    this.sh = !this.sh;
    this.clkd.emit(this.sh);
  }
}
