import { Component } from '@angular/core';
import { VisitorsEntry } from '../visitors-entry';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent {
  visitId:string=""
  visitName:string=""
  visitHost:string=""
  CustDetails:VisitorsEntry[]=[]
  AddNewCust()
  {
    var temp:VisitorsEntry={
      CustomerId:this.visitId,
      CustomerName:this.visitName,
      CustomerHost:this.visitHost
    }
    this.CustDetails.push(temp)
    console.log(this.CustDetails)
  }
  RemoveItem(indx:number)
  {
    this.CustDetails.splice(indx,1)
  }
}
 