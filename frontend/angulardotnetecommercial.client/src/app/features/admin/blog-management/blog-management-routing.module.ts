import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogManagementComponent } from './blog-management.component';
import { IndexBlogManagementComponent } from './pages/index-blog-management/index-blog-management.component';
import { EditBlogManagementComponent } from './pages/edit-blog-management/edit-blog-management.component';
import { AddBlogManagementComponent } from './pages/add-blog-management/add-blog-management.component';



const routes: Routes = [
    {
        path: '',
        component: BlogManagementComponent,
        children: [
            {
                path: '',
                component: IndexBlogManagementComponent,
            },
            {
                path: 'update/:id',
                component: EditBlogManagementComponent,
            },
            {
                path: 'add',
                component: AddBlogManagementComponent,
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
    exports: [RouterModule]
})
export class BlogManagementRoutingModule { }
