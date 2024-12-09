import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnauthorizationComponent } from './page/unauthorization/unauthorization.component';
import { ErrorComponent } from './error.component';

const routes: Routes = [
    {
        path: '',
        component: ErrorComponent,
        children: [
            {
                path: 'unauthorized',
                component: UnauthorizationComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }
