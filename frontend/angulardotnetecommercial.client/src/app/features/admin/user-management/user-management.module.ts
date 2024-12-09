import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { UserManagementComponent } from './user-management.component';
import { IndexUserManagementComponent } from './pages/index-user-management/index-user-management.component';
import { UserManagementRoutingModule } from './user-management-routing.module';



@NgModule({
  declarations: [UserManagementComponent, IndexUserManagementComponent],
    imports: [
        UserManagementRoutingModule,
        RouterModule,
    CommonModule
  ]
})
export class UserManagementModule { }
