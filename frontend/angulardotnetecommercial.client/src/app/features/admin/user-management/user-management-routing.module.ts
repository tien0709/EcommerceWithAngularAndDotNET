import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndexUserManagementComponent } from './pages/index-user-management/index-user-management.component';
import { UserManagementComponent } from './user-management.component';
import { AddUserManagementComponent } from './pages/add-user-management/add-user-management.component';



const routes: Routes = [
    {
        path: '',
        component: UserManagementComponent,
        children: [
            {
                path: '', component: IndexUserManagementComponent
            },
            {
                path: 'update', component: AddUserManagementComponent
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
export class UserManagementRoutingModule { }
