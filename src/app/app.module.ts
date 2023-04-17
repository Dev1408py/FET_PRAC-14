import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NavbarComponent } from './navbar/navbar.component';                                        
import { HomeComponent } from './home/home.component';                                                     
import { Prac15Component } from './prac15/prac15.component';
import { ProductComponent } from './product/product.component';                                                  


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    NavbarComponent,
    HomeComponent,
    Prac15Component,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }