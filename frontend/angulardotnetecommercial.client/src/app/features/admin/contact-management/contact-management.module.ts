import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { ContactManagementComponent } from './contact-management.component';
import { EditContactManagementComponent } from './pages/edit-contact-management/edit-contact-management.component';
import { ContactManagementRoutingModule } from './contact-management-routing.module';
import { IndexManagementContactComponent } from './pages/index-management-contact/index-management-contact.component';
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [ContactManagementComponent, EditContactManagementComponent, IndexManagementContactComponent],
    imports: [
        ContactManagementRoutingModule,
        CommonModule,
        FormsModule,
  ]
})
export class ContactManagementModule { }
