import { Component } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Router, RouterLink } from '@angular/router';
import { AuthServiceService } from '../../../core/authentication/services/auth-service.service';
import { Observable, Subscription } from 'rxjs';
import { PublicService } from '../../../features/public/services/public.service';
import { Icart } from '../../../data/models/ICart';
import { CartService } from '../../../features/public/services/cart.service';
@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
    public faShoppingCart: IconDefinition = faShoppingCart;

    isLoggedIn: boolean = false;
    userName: string | null = null;
    isAdmin: boolean = false;
    currentPage: string = "";
    cartItemCount: number = 0;
    private cartSubscription: Subscription | null = null; 

    constructor(private authService: AuthServiceService, private router: Router, private publicService: PublicService, private cartService: CartService) { }

    ngOnInit(): void {
        // Kiểm tra trạng thái đăng nhập khi component khởi tạo
        this.isLoggedIn = this.authService.isLoggedIn();
        this.userName = this.authService.getUserName();
        this.authService.isAdmin().subscribe(
            isAdmin => {
                this.isAdmin = isAdmin;
            },
            error => {
                console.error('Error checking admin role:', error);
            }
        );

        this.currentPage = "Home";
        if (this.isLoggedIn)
            this.cartSubscription = this.cartService.cartItemCount$.subscribe(count => {
                this.cartItemCount = count; // Cập nhật khi có thay đổi trong số lượng phần tử
            });
    }

    logout(): void {
        this.publicService.getCart().subscribe((response: any) => {
            this.cartService.updateCartItemCount(response.items.length);
        });
        this.authService.logout();
        this.router.navigate(['/auth']); // Navigate to home page upon successful login
    }

    changeCurrentPage(CurrentPage: string): void {
        this.currentPage = CurrentPage;
        console.log(this.currentPage);
    }

    ngOnDestroy() {
        // Đảm bảo hủy đăng ký khi component bị hủy
        if (this.cartSubscription) {
            this.cartSubscription.unsubscribe();
        }
    }
    onClick() {
        console.log('dcm');
        this.publicService.getCart().subscribe((response: any) => {
            this.cartService.updateCartItemCount(response.items.length);
        });
    }
}

