import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { ContentLayoutComponent } from './shared/layout/content-layout/content-layout.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { PublicModule } from './features/public/public.module';
import { AuthModule } from './features/auth/auth.module';
import { AdminModule } from './features/admin/admin.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        // for using router outlet
        RouterModule,
        // angular
        BrowserModule,
        // app
        PublicModule,
        AuthModule,
        AdminModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        // core & shared
        CoreModule,
        SharedModule,
    ],
    declarations: [
        AppComponent,
    ],
  providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
