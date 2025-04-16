import { Component, Input } from '@angular/core';

@Component({
  selector: '[app-row1]',
  templateUrl: './row1.component.html',
  styleUrls: ['./row1.component.css']
})
export class Row1Component {
// @Input() row1Text:string=""
// ArrColValues:any[]=['column1','column2','column3']
@Input() ArrColValues:any[]=[]
}
