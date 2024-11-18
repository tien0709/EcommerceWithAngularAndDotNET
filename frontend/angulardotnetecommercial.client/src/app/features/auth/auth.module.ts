import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { RegisterComponent } from './pages/register/register.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginModule } from './pages/login/login.module';
import { RegisterModule } from './pages/register/register.module';
import { LogoutModule } from './pages/logout/logout.module';
import { ForgotPasswordModule } from './pages/forgot-password/forgot-password.module';
import { ResetPasswordModule } from './pages/reset-password/reset-password.module';



@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
        AuthRoutingModule,
        LoginModule,
        RegisterModule,
        LogoutModule,
        ForgotPasswordModule,
        ResetPasswordModule
    ],
  declarations: [
    AuthComponent
  ]
})
export class AuthModule { }
