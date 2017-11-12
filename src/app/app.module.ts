import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { CardComponent } from './card/card.component';
import { JumboComponent } from './jumbo.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    CardComponent,
    JumboComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
