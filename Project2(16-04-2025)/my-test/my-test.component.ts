import { Component } from '@angular/core';

@Component({
  selector: 'app-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.css']
})
export class MyTestComponent {
  ShowDiv:boolean=true
  test1:boolean=true
  newPMName:string=''
  India_PMList:string[]=["modi","manmohan singh","vajpayee"]
  isPresent:boolean=false
  ToggleDiv()
  {
    this.ShowDiv=!this.ShowDiv
    console.log('from toggle')
  }
  AddNewEntry()
  {
    this.isPresent=false;
    var foundString=this.India_PMList.find((nm)=>nm.toUpperCase()==this.newPMName.toUpperCase())
    if(foundString!=undefined)
    {
      this.isPresent=true
    }
    else
    {
      this.India_PMList.push(this.newPMName)
    }
  }
  RemoveItem(indx:number)
  {
    this.India_PMList.splice(indx,1)
  }
}
