import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  template: `<div>
              <h1> First Component</h1>
              <hr>
            </div>`,
  styles: [`
    h1 {
      border : 1px solid red;
    }
  `]
})
export class FirstComponent {

  constructor() { }

}
