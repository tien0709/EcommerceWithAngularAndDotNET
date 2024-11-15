import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SharedModule } from '../../../../shared/shared.module';
import { FormsModule } from '@angular/forms'



@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
  declarations: [
        LoginComponent
  ]
})
export class LoginModule { }
