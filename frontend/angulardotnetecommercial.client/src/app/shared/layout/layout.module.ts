import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContentLayoutComponent } from './content-layout/content-layout.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterLink } from '@angular/router';



@NgModule({
  imports: [
        CommonModule,
        FontAwesomeModule,//to use for nav-bar-component
        RouterLink
    ],
    declarations: [
        ContentLayoutComponent,
        NavBarComponent,
        FooterComponent
    ],
    exports: [
        ContentLayoutComponent,
        NavBarComponent,
        FooterComponent
  ]
})
export class LayoutModule { }
