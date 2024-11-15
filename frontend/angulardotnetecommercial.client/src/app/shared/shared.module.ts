import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipperParallaxComponent } from './components/shipper-parallax/shipper-parallax.component';
import { LayoutModule } from './layout/layout.module';
import { LazyLoadObserverDirective } from './directives/lazy-loading.directive';



@NgModule({
    declarations: [ShipperParallaxComponent, LazyLoadObserverDirective],
    imports: [
      CommonModule,
      LayoutModule
    ],
    exports: [ShipperParallaxComponent, LazyLoadObserverDirective, LayoutModule],
})
export class SharedModule { }
