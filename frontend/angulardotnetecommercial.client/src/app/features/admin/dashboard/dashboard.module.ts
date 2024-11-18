import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../../shared/shared.module';
import { ComponentsModule } from '../../public/components/components.module';



@NgModule({
  declarations: [
        DashboardComponent
  ],
  imports: [
      CommonModule
  ],
    exports: [
        DashboardComponent
  ]
})
export class DashboardModule { }
