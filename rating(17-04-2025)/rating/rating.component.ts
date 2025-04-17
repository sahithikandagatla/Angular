import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent{//implements OnInit
// MaxRating:number=5
@Input()MaxRating:number=0
currentRating:number=-1
ratingArray:number[]=[]
// constructor()
// {
//   this.ratingArray=Array.from({length:this.MaxRating},(_,index)=>index)
// }
ngOnInit(): void {
  this.ratingArray=Array.from({length:this.MaxRating},(_,index)=>index)
}
SelectStar(indx:number)
{
  this.currentRating=indx
  console.log(indx)
}
GetStarStyle(indx:number):any
{
  if(indx>this.currentRating)
  {
    return {'starStyle':true,'selStar':false}
  }
  else
  {
    return {'starStyle':true,'selStar':true}
  }
}
}
