import { NgModule } from '@angular/core';
import { HomeComponent } from '../home/home.component'
import { ValuesModule } from '../values/values.module'

@NgModule({
    declarations: [HomeComponent],
    exports: [HomeComponent],
    imports: [ValuesModule],
})

export class HomeModule { }