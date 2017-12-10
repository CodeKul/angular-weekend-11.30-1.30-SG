import {
  Component,
  OnInit,
  ViewEncapsulation,
  ElementRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-local-refs',
  templateUrl: './local-refs.component.html',
  styleUrls: ['./local-refs.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LocalRefsComponent implements OnInit {

  yoNm: string;

  @ViewChild('yoNmIp')
  yoNmIp: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onClk() {
    this.yoNm = this.yoNmIp.nativeElement.value;
    console.log(this.yoNmIp.nativeElement.value);
  }
}
