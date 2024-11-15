import { Component } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Router, RouterLink } from '@angular/router';
import { AuthServiceService } from '../../../core/authentication/services/auth-service.service';
@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
    public faShoppingCart: IconDefinition = faShoppingCart;

    isLoggedIn: boolean = false;
    userName: string | null = null;

    constructor(private authService: AuthServiceService, private router: Router) { }

    ngOnInit(): void {
        // Kiểm tra trạng thái đăng nhập khi component khởi tạo
        this.isLoggedIn = this.authService.isLoggedIn();
        this.userName = this.authService.getUserName();
    }

    logout(): void {
        this.authService.logout();
        this.router.navigate(['/auth']); // Navigate to home page upon successful login
    }
}

