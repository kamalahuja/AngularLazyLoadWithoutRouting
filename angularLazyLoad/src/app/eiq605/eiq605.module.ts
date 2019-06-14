import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EIQ605Component} from './eiq605.component';
@NgModule({
  declarations: [EIQ605Component],
  imports: [
    CommonModule
  ],
  exports :[EIQ605Module.rootComponent]
})
export class EIQ605Module { 
  static rootComponent = EIQ605Component;
}
