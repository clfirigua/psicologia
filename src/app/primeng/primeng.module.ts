import { NgModule } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { InputMaskModule } from "primeng/inputmask";
import { CalendarModule } from "primeng/calendar";
import { DropdownModule } from "primeng/dropdown";
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  exports: [
    MenubarModule,
    ButtonModule,
    TableModule,
    InputMaskModule,
    CalendarModule,
    DropdownModule,
    InputTextModule
  ]
})
export class PrimengModule { }
