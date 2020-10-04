import { NgModule } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [NavbarComponent],
    exports: [NavbarComponent],
    imports: [BrowserModule],
})

export class NavbarModule { }
  