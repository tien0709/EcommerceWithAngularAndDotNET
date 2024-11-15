import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { BlogComponent } from './blog.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ComponentsModule
    ],
    declarations: [
      BlogComponent
    ],
    exports: [
        BlogComponent
    ]
})
export class BlogModule { }
