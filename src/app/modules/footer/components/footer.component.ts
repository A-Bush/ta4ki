import {Component} from "@angular/core";
@Component({
  moduleId: module.id,
  selector: "footer-component",
  template: `
  <p>{{footerText}}</p>
`
})

export class FooterComponent{
  footerText: string;
  constructor(){
    this.footerText = "Here footer";
  }
}
