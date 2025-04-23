import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { RestListComponent } from './rest-list/rest-list.component';

const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'UserList',component:UserListComponent},
  {path:'AddUser',component:AddUserComponent},
  {path:'AddRest',component:AddRestaurantComponent},
  {path:'RestList',component:RestListComponent},
  {path:'EditUser/:id',component:EditUserComponent},//here id is route param, format
  {path:'',redirectTo:'UserList',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
