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
                path: 'blogs', component: BlogManagementComponent,
            },

            {
                path: 'about', component: AboutManagementComponent,
            },

            {
                path: 'contact', component: ContactManagementComponent,
            },

            {
                path: 'products', component: ProductManagementComponent,
            },
            {
                path: 'user', component: UserManagementComponent,
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
