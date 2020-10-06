import { NgModule } from '@angular/core';
import { ValuesService } from './values.service'
import { ValuesComponent } from './values.component'
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [ValuesComponent],
    exports: [ValuesComponent],
    imports: [MatTableModule, MatSortModule, BrowserAnimationsModule, HttpClientModule],
    providers: [ValuesService],
    bootstrap: [],
})

export class ValuesModule { }