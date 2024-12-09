import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';
import { ROLES } from '../../constant/api.constant';

@Injectable({
    providedIn: 'root'
})
export class AuthorityGuard implements CanActivate {

    constructor(private authService: AuthServiceService, private router: Router) { }

    canActivate(): Observable<boolean> {
        return this.authService.isAdmin().pipe(
            tap(isAdmin => {
                if (!isAdmin) {
                    this.router.navigate(['error/unauthorized']);
                }
            })
        );
    }
}