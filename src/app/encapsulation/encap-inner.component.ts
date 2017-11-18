import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-encap-inner',
  template: `
    <p>
      Well welcome to codekul ..
    </p>
  `,
  styles: [
  ]
})
export class EncapInnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
