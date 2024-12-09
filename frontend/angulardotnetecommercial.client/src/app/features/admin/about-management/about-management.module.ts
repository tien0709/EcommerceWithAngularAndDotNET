import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutManagementComponent } from './about-management.component';
import { EditAboutManagementComponent } from './pages/edit-about-management/edit-about-management.component';;
import { IndexAboutManagementComponent } from './pages/index-about-management/index-about-management.component';
import { AboutManagementRoutingModule } from './about-management-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
    imports: [
        AboutManagementRoutingModule,
        FormsModule,
        CommonModule
    ],
  declarations: [AboutManagementComponent, EditAboutManagementComponent, IndexAboutManagementComponent]
})
export class AboutManagementModule { }
