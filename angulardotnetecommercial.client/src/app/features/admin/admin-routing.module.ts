import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

// admin-routing.module.ts
const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            {
                path: 'about',
                loadChildren: () => import('./about-management/about-management.module')
                    .then(m => m.AboutManagementModule)
            },
            {
                path: 'blog',
                loadChildren: () => import('./blog-management/blog-management.module')
                    .then(m => m.BlogManagementModule)
            },
            {
                path: 'contact',
                loadChildren: () => import('./contact-management/contact-management.module')
                    .then(m => m.ContactManagementModule)
            },
            {
                path: '',
                loadChildren: () => import('./dashboard/dashboard.module')
                    .then(m => m.DashboardModule)
            },
            {
                path: 'products',
                loadChildren: () => import('./product-management/product-management.module')
                    .then(m => m.ProductManagementModule)
            },
            {
                path: 'users',
                loadChildren: () => import('./user-management/user-management.module')
                    .then(m => m.UserManagementModule)
            }
        ]
    }
];

@NgModule({
  imports: [
      CommonModule,
        RouterModule.forChild(routes)
    ],
  exports: [
      RouterModule
  ]
})
export class AdminRoutingModule { }
