import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeadingComponent } from './main-heading/main-heading.component';
import { SubHeadingComponent } from './sub-heading/sub-heading.component';
import { MyParagraphComponent } from './my-paragraph/my-paragraph.component';
import { TableComponent } from './table/table.component';
import { Row1Component } from './row1/row1.component';
import { Row2Component } from './row2/row2.component';
import { Row1p1Component } from './row1p1/row1p1.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeadingComponent,
    SubHeadingComponent,
    MyParagraphComponent,
    TableComponent,
    Row1Component,
    Row2Component,
    Row1p1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
