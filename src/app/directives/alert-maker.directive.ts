import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[mkAlt]'
})
export class AlertMakerDirective {

  @Input(`mkAlt`)
  @HostBinding('style.border')
  brd: string;

  @HostBinding('class.alert')
  clsAl: boolean;

  @HostBinding('class.alert-info')
  clsInf: boolean;

  constructor(
    private elRf: ElementRef,
    private rend: Renderer2
  ) {
    //this.elRf.nativeElement.classList.add('alert');
    //this.elRf.nativeElement.classList.add('alert-success');

    console.log(elRf);
    //this.elRf.nativeElement.onclick = () => console.log(`i am clicked`);
  }

  @HostListener(`mouseenter`)
  onMakeAlert() {
    //this.rend.addClass(this.elRf.nativeElement, 'alert');
    //this.rend.addClass(this.elRf.nativeElement, 'alert-info');
    this.clsAl = true;
    this.clsInf = true;
    this.brd = '1px solid red';
  }

  @HostListener(`mouseleave`)
  offAlert() {
    //this.rend.removeClass(this.elRf.nativeElement, 'alert');
    //this.rend.removeClass(this.elRf.nativeElement, 'alert-info');

    this.clsAl = false;
    this.clsInf = false;
    this.brd = '1px solid white';
  }
}
