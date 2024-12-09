import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { CheckoutManagementComponent } from './checkout-management.component';
import { IndexCheckoutManagementComponent } from './index-checkout-management/index-checkout-management.component';


const routes: Routes = [
    {
        path: '',
        component: CheckoutManagementComponent,
        children: [
            {
                path: '',
                component: IndexCheckoutManagementComponent
            }
        ]
    }
];
@NgModule({
  declarations: [],
  imports: [
      CommonModule,
        RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class CheckoutManagementRoutingModule { }
