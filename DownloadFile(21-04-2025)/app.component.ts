import { Component } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private notSrv:NotificationService)
  {

  }
  DownloadFile()
  {
    var msg=this.notSrv.sendMessage()
    console.log(msg)
  }
}
