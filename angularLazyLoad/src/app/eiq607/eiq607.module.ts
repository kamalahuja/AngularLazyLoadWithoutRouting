import { NgModule, Component, Pipe, Directive } from '../exports-constants';
import { CommonModule } from '@angular/common';
import {EIQ607Component} from './eiq607.component';
@NgModule({
  declarations: [EIQ607Component],
  imports: [
    CommonModule
  ],
  entryComponents :[EIQ607Module.rootComponent]
})
export class EIQ607Module { 
  static rootComponent = EIQ607Component;
}
