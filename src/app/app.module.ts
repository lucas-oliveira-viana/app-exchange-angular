import { NgModule } from '@angular/core';
import { NavbarModule } from '../components/navbar/navbar.module'
import { HomeModule } from '../components/home/home.module'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [NavbarModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }