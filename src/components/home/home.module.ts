import { NgModule } from '@angular/core';
import { ValuesComponent } from '../values/values.component'
import { HomeComponent } from '../home/home.component'
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
    declarations: [ValuesComponent, HomeComponent],
    exports: [ValuesComponent, HomeComponent],
    imports: [MatTableModule, MatSortModule, BrowserAnimationsModule],
})

export class HomeModule { }