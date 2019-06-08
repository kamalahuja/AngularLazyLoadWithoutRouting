import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EIQ604Component} from './eiq604.component';

@NgModule({
  declarations: [EIQ604Component],
  imports: [
    CommonModule
  ],
  exports :[EIQ604Component]
})
export class EIQ604Module { }
