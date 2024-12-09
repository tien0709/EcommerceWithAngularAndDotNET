import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';
import { ROLES } from '../../constant/api.constant';
import { MessageService } from '../../services/message.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthServiceService, private router: Router, private messageService: MessageService) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.authService.isLoggedIn()) {
            return true;
        } else {
            this.messageService.showMessage('Bạn phải đăng nhập để sử dụng tính năng Cart');
            this.router.navigate(['/auth']);
            return false;
        }
    }
}
