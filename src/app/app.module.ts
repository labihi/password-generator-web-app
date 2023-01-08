import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalContainerComponent } from './components/global-container/global-container.component';
import {FormsModule} from "@angular/forms";
import { PasswordLengthSliderComponent } from './components/password-length-slider/password-length-slider.component';
import { PasswordShowAndCopyComponent } from './components/password-show-and-copy/password-show-and-copy.component';
import { CustomGenerateButtonComponent } from './components/custom-generate-button/custom-generate-button.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalContainerComponent,
    PasswordLengthSliderComponent,
    PasswordShowAndCopyComponent,
    CustomGenerateButtonComponent
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
