import {Component} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "header-component",
  templateUrl: "./../templates/header.component.html"
})

export class HeaderComponent{
  text: string;
  constructor(){
    this.text = "Here header";
  }
}
