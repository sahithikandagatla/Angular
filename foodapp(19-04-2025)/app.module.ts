import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageRestaurantComponent } from './manage-restaurant/manage-restaurant.component';
import { FormsModule } from '@angular/forms';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { MyStatusPipe } from './my-status.pipe';
import { MarkElementDirective } from './mark-element.directive';

@NgModule({
  declarations: [
    AppComponent,
    ManageRestaurantComponent,
    RestaurantListComponent,
    MyStatusPipe,
    MarkElementDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
