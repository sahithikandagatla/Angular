import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-heading',
  styleUrls: ['./main-heading.component.css'],
  template:'<h3>{{headingtext}}</h3>'
})
export class MainHeadingComponent {
// @Input() headingtext:string="list users"
headingtext:string="list users"
}
