import { BrowserModule } from '@angular/platform-browser';
import { NgModule,SystemJsNgModuleLoader, NgModuleFactoryLoader  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {EIQ603Module} from './eiq603/eiq603.module';
import {EIQ604Module} from './eiq604/eiq604.module';
import {EIQ605Module} from './eiq605/eiq605.module';
import {LoadModuleDirective} from './lazy-module-directive';

import { JitCompilerFactory } from '@angular/platform-browser-dynamic';
import {Compiler, COMPILER_OPTIONS, CompilerFactory } from '@angular/core';

export function createCompiler(compilerFactory: CompilerFactory) {
  return compilerFactory.createCompiler();
}

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
  providers: [{ provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader }, 
    {provide: COMPILER_OPTIONS, useValue: {}, multi: true},
    {provide: CompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS]},
    {provide: Compiler, useFactory: createCompiler, deps: [CompilerFactory]}],
  bootstrap: [AppComponent]
})
export class AppModule { }
