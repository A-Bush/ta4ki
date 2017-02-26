import {Component} from "@angular/core";
import {User} from "../../../classes/user";

@Component({
  moduleId: module.id,
  selector: "general-component",
  templateUrl: "./../templates/general.component.html"
})

export class HeaderComponent{

  homeLink: string = "Главная";
  aboutUs: string = "О нас";
  contacts: string = "Контакты";

  text: string;
  constructor(){
    this.text = "Here header";
  }
}
