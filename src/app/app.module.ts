import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarModule } from '../components/navbar/navbar.module'
import { HomeModule } from '../components/home/home.module'
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { NavbarComponent } from '../components/navbar/navbar.component'
import { HomeComponent } from '../components/home/home.component';
import { ValuesComponent } from '../components/values/values.component';
import { MatSortModule } from '@angular/material/sort'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, HomeComponent, ValuesComponent
  ],
  imports: [
    BrowserModule, FormsModule, NavbarModule, HomeModule, MatTableModule, MatSortModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }