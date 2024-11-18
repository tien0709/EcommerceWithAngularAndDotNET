import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AboutManagementModule } from './about-management/about-management.module';
import { BlogManagementModule } from './blog-management/blog-management.module';
import { ContactManagementModule } from './contact-management/contact-management.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProductManagementModule } from './product-management/product-management.module';
import { UserManagementModule } from './user-management/user-management.module';
import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
    imports: [
        // to use router outlet
        RouterModule,
      AdminRoutingModule,
      CommonModule,
      AboutManagementModule,
      BlogManagementModule,
      ContactManagementModule,
      DashboardModule,
      ProductManagementModule,
      UserManagementModule,
      SharedModule
    ],
    declarations: [
        AdminComponent// to use imported library/module in components
    ]
})
export class AdminModule { }
