import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  MainTableData:any[]=[['id','name','loc'],[1,'swetha','chn'],[2,'pooja','bang']]
  MainTableData2:any[]=[['id','name','loc'],[1,'xyz','hyd'],[2,'pqr','tpt']]
}
