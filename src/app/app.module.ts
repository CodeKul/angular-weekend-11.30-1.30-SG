import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { CardComponent } from './card/card.component';
import { JumboComponent } from './jumbo.component';
import { EncapsulationComponent } from './encapsulation/encapsulation.component';
import { EncapInnerComponent } from './encapsulation/encap-inner.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { MyCardComponent } from './databinding/my-card.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    CardComponent,
    JumboComponent,
    EncapsulationComponent,
    EncapInnerComponent,
    DatabindingComponent,
    MyCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
