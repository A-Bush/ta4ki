import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {GeneralModule} from "./modules/header&body/general.module";
import {FooterModule} from "./modules/footer/footer.module";
import {RegistrationComponent} from "./modules/header&body/components/registration.component";


// const appRoutes = [
//
//   {path: "registration",  component: RegistrationComponent}
//
// ];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    GeneralModule,
    // BodyModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
