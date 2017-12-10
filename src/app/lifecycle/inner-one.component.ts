import { Component, ViewEncapsulation, Input } from '@angular/core';
import {
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-inner-one',
  template: `
    <p>
      date is {{myNm}}
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class InnerOneComponent
  implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { }

  @Input('myNm')
  myNm: string;

  ngOnChanges(changes: SimpleChanges) {
    console.log(`ngOnChanges`);
    console.log(changes);
  }
  ngOnInit() {
    console.log(`ngOnInit`);
  }
  ngDoCheck(): void {
    console.log(`ngDoCheck`);
  }

  ngAfterContentInit(): void {
    console.log(`ngAfterContentInit`);
  }

  ngAfterContentChecked(): void {
    console.log(`ngAfterContentChecked`);
  }

  ngAfterViewInit(): void {
    console.log(`ngAfterViewInit`);
  }

  ngAfterViewChecked(): void {
    console.log(`ngAfterViewChecked`);
  }

  ngOnDestroy(): void {
    console.log(`ngOnDestroy`);
  }
}
