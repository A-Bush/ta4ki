import {NgModule} from "@angular/core/src/metadata/ng_module";
import {HeaderComponent} from "./components/header.component";
import {RegistrationComponent} from "./components/registration.component";
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./components/about.component";

const appRoutes = [

  {path: "registration",  component: RegistrationComponent},
  {path: "about", component: AboutComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  declarations: [HeaderComponent, RegistrationComponent, AboutComponent],
  exports: [HeaderComponent, RegistrationComponent, AboutComponent]
})

export class GeneralModule{}
