import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorRoutingModule } from './error-routing.module';
import { ErrorComponent } from './error.component';
import { UnauthorizationComponent } from './page/unauthorization/unauthorization.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ErrorComponent,
    UnauthorizationComponent
  ],
    imports: [
    SharedModule,
    CommonModule,
    ErrorRoutingModule
  ]
})
export class ErrorModule { }
