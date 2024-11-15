import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../../shared/shared.module';
import { ComponentsModule } from '../components/components.module';


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ComponentsModule
    ],
    declarations: [
        HomeComponent
    ],
    exports: [
      HomeComponent
  ]
})
export class HomeModule { }
