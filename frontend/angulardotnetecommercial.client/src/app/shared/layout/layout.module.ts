import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContentLayoutComponent } from './content-layout/content-layout.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterLink } from '@angular/router';
import { NavBarManagementComponent } from './nav-bar-management/nav-bar-management.component';



@NgModule({
  imports: [
        CommonModule,
        FontAwesomeModule,//to use for nav-bar-component
        RouterLink
    ],
    declarations: [
        ContentLayoutComponent,
        NavBarComponent,
        FooterComponent,
        NavBarManagementComponent
    ],
    exports: [
        ContentLayoutComponent,
        NavBarComponent,
        FooterComponent,
        NavBarManagementComponent
  ]
})
export class LayoutModule { }
