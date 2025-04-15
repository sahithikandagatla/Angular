import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableNodeComponent } from './table-node/table-node.component';
import { Row1Component } from './row1/row1.component';
import { Col1Component } from './col1/col1.component';

@NgModule({
  declarations: [
    AppComponent,
    TableNodeComponent,
    Row1Component,
    Col1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
