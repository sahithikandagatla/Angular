import { Component, EventEmitter, Output } from '@angular/core';
import { TaskInfo } from '../task-info';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  taskId:number=0
  taskTitle:string=""
  taskDuration:number=0
  taskStatus:string=""
  @Output()OnTaskAddEvent:EventEmitter<TaskInfo>
  constructor()
  {
    this.OnTaskAddEvent=new EventEmitter()
  }
  AddTaskData()
  {
    this.OnTaskAddEvent.emit({taskId:this.taskId,taskTitle:this.taskTitle,taskDuration:this.taskDuration,taskStatus:this.taskStatus})
  }
}
