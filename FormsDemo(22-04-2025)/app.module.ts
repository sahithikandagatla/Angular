import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserTempDrivenComponent } from './add-user-temp-driven/add-user-temp-driven.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserReactDrivenComponent } from './add-user-react-driven/add-user-react-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserTempDrivenComponent,
    AddUserReactDrivenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,//for template driven form
    ReactiveFormsModule//for react driven form
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
