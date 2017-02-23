import {NgModule} from "@angular/core/src/metadata/ng_module";
import {HeaderComponent} from "./components/header.component";

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})

export class HeaderModule{}
