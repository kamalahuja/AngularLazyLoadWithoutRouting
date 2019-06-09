import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EIQ606Component} from './eiq606.component';
@NgModule({
  declarations: [EIQ606Component],
  imports: [
    CommonModule
  ],
  entryComponents :[EIQ606Module.rootComponent]
})
export class EIQ606Module { 
  static rootComponent = EIQ606Component;
}
