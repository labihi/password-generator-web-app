import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalContainerComponent } from './components/global-container/global-container.component';
import {FormsModule} from "@angular/forms";
import { PasswordLengthSliderComponent } from './components/password-length-slider/password-length-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalContainerComponent,
    PasswordLengthSliderComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
