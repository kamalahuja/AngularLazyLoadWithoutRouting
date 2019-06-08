import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EIQ603Component} from './eiq603.component';

@NgModule({
  declarations: [EIQ603Component],
  imports: [
    CommonModule
  ],
  exports :[EIQ603Component]
})
export class EIQ603Module { }
