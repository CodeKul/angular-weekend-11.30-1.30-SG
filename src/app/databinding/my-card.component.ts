import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-card',
  template: `
    <div class="card" style="width: 20rem;">
      <img class="card-img-top" [src]="img" alt="Card image cap" width="100px" height="100px">
      <div class="card-block">
        <h4 class="card-title">{{ttl}}</h4>
        <p class="card-text">{{info}}</p>
        <input type="button" class="btn btn-primary" value="Show" (click)="myClick()">
      </div>
</div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class MyCardComponent implements OnInit {

  @Input()
  img: string;

  @Input()
  ttl: string;

  @Input()
  info: string;

  @Output()
  cardClick: EventEmitter<string>;

  constructor() {
    this.cardClick = new EventEmitter();
  }

  ngOnInit() {
  }

  myClick() {
    this.cardClick.emit(new Date().toString());
  }
}
