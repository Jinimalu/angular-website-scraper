import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Screen1Component } from './screen1/screen1.component';
import { Screen2Component } from './screen2/screen2.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    Screen1Component,
    Screen2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
