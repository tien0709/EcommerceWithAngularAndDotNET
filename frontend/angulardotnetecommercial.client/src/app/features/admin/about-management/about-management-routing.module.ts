import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutManagementComponent } from './about-management.component';
import { EditAboutManagementComponent } from './pages/edit-about-management/edit-about-management.component';
import { IndexAboutManagementComponent } from './pages/index-about-management/index-about-management.component';



const routes: Routes = [
    {
        path: '',
        component: AboutManagementComponent,
        children: [
            {
                path: '',
                component: IndexAboutManagementComponent,
            },
            {
                path: 'update',
                component: EditAboutManagementComponent,
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
export class AboutManagementRoutingModule { }
