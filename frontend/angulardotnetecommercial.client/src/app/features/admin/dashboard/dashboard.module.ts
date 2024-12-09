import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../../shared/shared.module';
import { ComponentsModule } from '../../public/components/components.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DashboardComponent
  ],
    imports: [
      RouterModule,
      CommonModule
  ],
    exports: [
        DashboardComponent
  ]
})
export class DashboardModule { }
