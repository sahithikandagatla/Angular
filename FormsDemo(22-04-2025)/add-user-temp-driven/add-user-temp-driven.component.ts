import { Component } from '@angular/core';
import { UserInfo } from '../user-info';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-user-temp-driven',

  templateUrl: './add-user-temp-driven.component.html',
  styleUrls: ['./add-user-temp-driven.component.css']
})
export class AddUserTempDrivenComponent {
//userId:string=""
userData:UserInfo={
  role:1//to get default selection in role
}
AddNewUser(frmValue:any)
{
  console.log("from add new user")
  console.log(this.userData)
  // console.log(frmValue)
  // console.log(frmValue.userId)
}
}
