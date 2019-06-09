import { InjectionToken } from '@angular/core';

export type LAZY_MODULES = {
  exhibitModule: string;
};

export const lazyMap: LAZY_MODULES = {
    exhibitModule: 'src/app/eiq606/eiq606.module#EIQ606Module'
};

export const LAZY_MODULES_MAP = new InjectionToken('LAZY_MODULES_MAP', {
  factory: () => lazyMap
});