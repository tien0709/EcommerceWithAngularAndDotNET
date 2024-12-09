import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from '../../public/contact/contact.component';
import { EditContactManagementComponent } from './pages/edit-contact-management/edit-contact-management.component';
import { ContactManagementComponent } from './contact-management.component';
import { IndexManagementContactComponent } from './pages/index-management-contact/index-management-contact.component';



const routes: Routes = [
    {
        path: '',
        component: ContactManagementComponent,
        children: [
            {
                path: '', component: IndexManagementContactComponent                    
            },
            {
                path: 'update', component: EditContactManagementComponent
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
export class ContactManagementRoutingModule { }
