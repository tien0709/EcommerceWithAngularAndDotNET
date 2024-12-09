import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogManagementComponent } from './blog-management/blog-management.component';
import { AboutManagementComponent } from './about-management/about-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { ContactManagementComponent } from './contact-management/contact-management.component';
import { EditAboutManagementComponent } from './about-management/pages/edit-about-management/edit-about-management.component';

// admin-routing.module.ts

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: '',
                component: DashboardComponent,
            },

            {
                path: 'blogs',
                loadChildren: () => import('./blog-management/blog-management.module').then(m => m.BlogManagementModule)
            },

            {
                path: 'about',
                loadChildren: () => import('./about-management/about-management.module').then(m => m.AboutManagementModule)
            },

            {
                path: 'contact',
                loadChildren: () => import('./contact-management/contact-management.module').then(m => m.ContactManagementModule)
            },

            {
                path: 'users',
                loadChildren: () => import('./user-management/user-management.module').then(m => m.UserManagementModule)
            },
            {
                  path: 'products', 
                 loadChildren: () => import('./product-management/product-management.module').then(m => m.ProductManagementModule)
            },
            {
                path: 'checkouts',
                loadChildren: () => import('./checkout-management/checkout-management.module').then(m => m.CheckoutManagementModule)
            },

        ]
    }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
