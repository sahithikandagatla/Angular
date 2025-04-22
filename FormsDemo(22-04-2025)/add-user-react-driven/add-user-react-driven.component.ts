import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserInfo } from '../user-info';

@Component({
  selector: 'app-add-user-react-driven',
  templateUrl: './add-user-react-driven.component.html',
  styleUrls: ['./add-user-react-driven.component.css']
})
export class AddUserReactDrivenComponent {
  @Output() OnAddNewUser:EventEmitter<UserInfo>
  constructor()
  {
    this.OnAddNewUser=new EventEmitter<UserInfo>()
  }
  myfrm:FormGroup=new FormGroup({
    userId:new FormControl('',[Validators.required]),
    userName:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.maxLength(8)]),
    role:new FormControl('')
  })
  AddNewUser()
  {
    // console.log(`userId: ${this.myfrm.controls['userId'].value}
    //   userName: ${this.myfrm.controls['userName'].value}
    //   email: ${this.myfrm.controls['email'].value}
    //   password: ${this.myfrm.controls['password'].value}
    //   role: ${this.myfrm.controls['role'].value}`)
    let userData:UserInfo={
      userId:this.GetControlValue('userId'),
      userName:this.GetControlValue('userName'),
      email:this.GetControlValue('email'),
      password:this.GetControlValue('password'),
      role:this.GetControlValue('role')
    }
    console.log(userData)
    this.OnAddNewUser.emit(userData)
  }
  GetControlValue(ctrlName:string):any{
    return this.myfrm.controls[ctrlName].value
  }
  IsControlNotValid(ctrlName:string):boolean
  {
    return !this.myfrm.controls[ctrlName].valid && this.myfrm.controls[ctrlName].touched
  }
  IsFormValid():boolean
  {
    return this.myfrm.valid
  }
}