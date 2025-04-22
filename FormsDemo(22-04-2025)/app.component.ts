import { Component } from '@angular/core';
import { UserInfo } from './user-info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormsDemo';
  userArray:UserInfo[]=[]
  OnNewUserAdd(newUser:UserInfo)
  {
    this.userArray.push(newUser)
  }
}
