import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-col1',
  templateUrl: './col1.component.html',
  styleUrls: ['./col1.component.css']
})
export class Col1Component {
@Input() col1Text:string=""
}
