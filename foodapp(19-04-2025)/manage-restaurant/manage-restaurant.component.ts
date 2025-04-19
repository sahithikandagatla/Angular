import { Component } from '@angular/core';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-manage-restaurant',
  templateUrl: './manage-restaurant.component.html',
  styleUrls: ['./manage-restaurant.component.css']
})
export class ManageRestaurantComponent {
  restId:string=""
  restName:string=""
  restLoc:string=""
  restStatus:boolean=false
  restaurantArray:Restaurant[]=[]
  AddRestaurant()
  {
    console.log("AddRestaurant")
    this.restaurantArray.push({
      restId:this.restId,
      restName:this.restName,
      restLoc:this.restLoc,
      restStatus:this.restStatus,
      restMinOrder:200,
      restDiscount:0.813
    })
    console.log(this.restaurantArray)
  }
}
