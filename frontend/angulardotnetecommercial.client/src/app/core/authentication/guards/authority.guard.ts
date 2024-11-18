import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';
import { ROLES } from '../../constant/api.constant';

@Injectable({
    providedIn: 'root'
})
export class AuthorityGuard implements CanActivate {

    constructor(private authService: AuthServiceService, private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.authService.isLoggedIn()) {
            this.authService.getRole().subscribe({
                next: (response) => {
                    if (response.Role == ROLES.ADMIN) {
                        this.router.navigate(['/admin']); // Navigate to home page upon successful login
                    } else  {
                        this.router.navigate(['/notpermission']); 
                    }
                },
                error: (error) => {
                }
            });
            return true;
        } else {
            this.router.navigate(['/auth']);
            return false;
        }
    }
}