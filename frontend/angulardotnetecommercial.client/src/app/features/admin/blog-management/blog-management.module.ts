import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBlogManagementComponent } from './pages/add-blog-management/add-blog-management.component';
import { EditBlogManagementComponent } from './pages/edit-blog-management/edit-blog-management.component';


@NgModule({
  declarations: [
    AddBlogManagementComponent,
    EditBlogManagementComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class BlogManagementModule { }
