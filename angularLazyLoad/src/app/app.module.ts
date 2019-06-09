import { BrowserModule } from '@angular/platform-browser';
import { NgModule,SystemJsNgModuleLoader, NgModuleFactoryLoader  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {EIQ603Module} from './eiq603/eiq603.module';
import {EIQ604Module} from './eiq604/eiq604.module';
import {EIQ605Module} from './eiq605/eiq605.module';
import {LoadModuleDirective} from './lazy-module-directive';
@NgModule({
  declarations: [
    AppComponent,
    LoadModuleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    EIQ603Module,
    EIQ604Module,
    EIQ605Module,
    
  ],
  providers: [{ provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader }],
  bootstrap: [AppComponent]
})
export class AppModule { }
