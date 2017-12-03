import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DirectivesComponent implements OnInit {

  isSh = true;
  mobiles = [
    'Android',
    'Apple',
    'Windows',
    'Moto',
    'HTC'
  ];
  day = 1;

  constructor() { }

  ngOnInit() {
  }

}
