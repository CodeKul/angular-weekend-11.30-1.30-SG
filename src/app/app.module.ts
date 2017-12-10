import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatStepperModule } from '@angular/material';
import {RatingModule} from 'ng2-rating';


import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { CardComponent } from './card/card.component';
import { JumboComponent } from './jumbo.component';
import { EncapsulationComponent } from './encapsulation/encapsulation.component';
import { EncapInnerComponent } from './encapsulation/encap-inner.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { MyCardComponent } from './databinding/my-card.component';
import { CmpOneComponent } from './databinding/cmp-one.component';
import { CmpTwoComponent } from './databinding/cmp-two.component';
import { DirectivesComponent } from './directives/directives.component';
import { AlertMakerDirective } from './directives/alert-maker.directive';
import { NavV1Component } from './directives/nav-v1.component';
import { NvDirective } from './directives/nv.directive';
import { UnlessDirective } from './directives/unless.directive';
import { LocalRefsComponent } from './local-refs/local-refs.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { PassContentComponent } from './content-projection/pass-content.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { InnerOneComponent } from './lifecycle/inner-one.component';
import { ServicesComponent } from './services/services.component';
import { LocalStorageService } from './services/local-storage.service';
import { ProgressBarComponent } from './services/progress-bar.component';
import { CalcComponent } from './services/calc.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    CardComponent,
    JumboComponent,
    EncapsulationComponent,
    EncapInnerComponent,
    DatabindingComponent,
    MyCardComponent,
    CmpOneComponent,
    CmpTwoComponent,
    DirectivesComponent,
    AlertMakerDirective,
    NavV1Component,
    NvDirective,
    UnlessDirective,
    LocalRefsComponent,
    ContentProjectionComponent,
    PassContentComponent,
    LifecycleComponent,
    InnerOneComponent,
    ServicesComponent,
    ProgressBarComponent,
    CalcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatStepperModule,
    RatingModule
  ],
  providers: [
    LocalStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
