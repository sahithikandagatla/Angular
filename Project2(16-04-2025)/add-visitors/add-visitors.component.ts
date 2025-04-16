import { Component } from '@angular/core';
import { VisitorsEntry } from '../visitors-entry';

@Component({
  selector: 'app-add-visitors',
  templateUrl: './add-visitors.component.html',
  styleUrls: ['./add-visitors.component.css']
})
export class AddVisitorsComponent {
visName:string=""
visId:string=""
visHost:string=""
numChars:number=40
visitorData:VisitorsEntry[]=[]
OnUserKeyUp()
{
  // console.log('key up')
  this.numChars=40-this.visName.length
}
OnVisitorAdd()
{
  console.log('button')
  var temp:VisitorsEntry={
    visitorId:this.visId,
    visitorName:this.visName,
    visitorHost:this.visHost
  }
  this.visitorData.push(temp)
  console.log(this.visitorData)
}
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      