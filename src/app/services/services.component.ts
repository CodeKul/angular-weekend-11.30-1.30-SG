import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
