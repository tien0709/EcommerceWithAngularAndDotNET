import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiInterceptor } from './interceptors/api.interceptors';
import { ApiService } from './services/api.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './authentication/guards/auth.guard';
import { AuthServiceService } from './authentication/services/auth-service.service';
import { AuthorityGuard } from './authentication/guards/authority.guard';
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
        },
        AuthGuard,
        AuthorityGuard,
        AuthServiceService
    ]
})
export class CoreModule { }
