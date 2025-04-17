import { Component } from '@angular/core';
import { TaskInfo } from '../task-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  TaskData:TaskInfo[]=[]
  OnChildEvent(data:TaskInfo)
  {
    this.TaskData.push(data)
  }
}
