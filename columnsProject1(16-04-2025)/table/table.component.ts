import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
// @Input() tabledata:string=""
// tabledata:any[]=[['r1-c1','r1-c2','r1-c3'],['r2-c1','r2-c2','r2-c3'],['r3-c1','r3-c2','r3-c3']]
@Input() tabledata:any[]=[]
}
