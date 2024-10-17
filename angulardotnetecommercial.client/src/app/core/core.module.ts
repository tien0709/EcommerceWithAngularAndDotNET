import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiInterceptor } from './interceptors/api.interceptors';
import { ApiService } from './services/api.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
@NgModule({
  declarations: [],
  imports: [
      CommonModule,
    ],
    exports: [
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ApiInterceptor,
            multi: true
        }
    ]
})
export class CoreModule { }
