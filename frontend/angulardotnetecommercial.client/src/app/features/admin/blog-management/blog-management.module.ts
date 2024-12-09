import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBlogManagementComponent } from './pages/add-blog-management/add-blog-management.component';
import { EditBlogManagementComponent } from './pages/edit-blog-management/edit-blog-management.component';
import { RouterModule } from '@angular/router';
import { BlogManagementComponent } from './blog-management.component';
import { IndexBlogManagementComponent } from './pages/index-blog-management/index-blog-management.component';
import { BlogManagementRoutingModule } from './blog-management-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        BlogManagementComponent,
    AddBlogManagementComponent,
    EditBlogManagementComponent,
    IndexBlogManagementComponent,
  ],
    imports: [
        BlogManagementRoutingModule,
        FormsModule,
        CommonModule
  ]
})
export class BlogManagementModule { }
