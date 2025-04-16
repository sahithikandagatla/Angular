import { Component, Input } from '@angular/core';

@Component({
  selector: '[app-row1p1]',
  templateUrl: './row1p1.component.html',
  styleUrls: ['./row1p1.component.css']
})
export class Row1p1Component {
@Input() row1p1Text:string=""
// row1p1Text:string="colvalue"
}
