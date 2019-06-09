import { Directive, Input, OnInit, ViewContainerRef, Injector, NgModuleRef, NgModuleFactoryLoader, Inject, NgModuleFactory } from '@angular/core';
import {LAZY_MODULES, LAZY_MODULES_MAP} from './lazy-load-map';

import { Type } from '@angular/core';
type ModuleWithRoot = Type<any> & { rootComponent: Type<any> };
@Directive({
    selector: '[loadModule]'
  })
  
  export class LoadModuleDirective implements OnInit {
    @Input('loadModule') moduleName: keyof LAZY_MODULES;
    private moduleRef: NgModuleRef<any>;
  
    constructor(
      private vcr: ViewContainerRef,
      private injector: Injector,
      private loader: NgModuleFactoryLoader,
      @Inject(LAZY_MODULES_MAP) private modulesMap
    ) { }
  
    ngOnInit() {
        console.log("directive ng init start");
        let path = console.log(this.modulesMap['exhibitModule']);
        this.loader
          .load(this.modulesMap[this.moduleName])
          .then((moduleFactory: NgModuleFactory<any>) => {
            this.moduleRef = moduleFactory.create(this.injector);
            const rootComponent = (moduleFactory.moduleType as ModuleWithRoot)
              .rootComponent;
            
            const factory = this.moduleRef.componentFactoryResolver.resolveComponentFactory(
              rootComponent
            );
            
            this.vcr.createComponent(factory);
          });
          console.log("directive ng init end");
      }
  
    ngOnDestroy() {
      this.moduleRef && this.moduleRef.destroy();
    }
  }