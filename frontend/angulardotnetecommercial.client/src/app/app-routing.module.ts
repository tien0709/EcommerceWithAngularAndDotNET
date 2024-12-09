import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './features/auth/pages/logout/logout.component';
import { ResetPasswordComponent } from './features/auth/pages/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './features/auth/pages/forgot-password/forgot-password.component';
import { RegisterComponent } from './features/auth/pages/register/register.component';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { DashboardComponent } from './features/admin/dashboard/dashboard.component';
import { CheckoutComponent } from './features/public/checkout/checkout.component';
import { CartComponent } from './features/public/cart/cart.component';
import { AuthGuard } from './core/authentication/guards/auth.guard';
import { AuthorityGuard } from './core/authentication/guards/authority.guard';

const routes: Routes = [
    {
        path: 'admin', loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule), canActivate: [AuthorityGuard]
    },

    { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },

    { path: '', loadChildren: () => import('./features/public/public.module').then(m => m.PublicModule) },

    { path: 'error', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule) }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
