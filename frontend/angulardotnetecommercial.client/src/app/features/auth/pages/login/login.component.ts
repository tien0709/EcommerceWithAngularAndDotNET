import { Component } from '@angular/core';
import { ApiService } from '../../../../core/services/api.service';
import { API_ENDPOINTS } from '../../../../core/constant/api.constant';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../../../core/authentication/services/auth-service.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    username: string = '';
    password: string = '';
    errorMessage: string = '';

    constructor(private apiService: ApiService, private router: Router, private authService: AuthServiceService) { }
    onSubmit() {
        this.authService.login(this.username, this.password).subscribe({
            next: (response) => {
                // Kiểm tra nếu response chứa token (hoặc bất kỳ thông tin nào khác chứng minh đăng nhập thành công)
                if (response && response.token) {
                    this.router.navigate(['/']); // Navigate to home page upon successful login
                } else {
                    this.errorMessage = 'Invalid username or password'; // Đăng nhập không thành công
                }
            },
            error: (error) => {
                // Xử lý lỗi khi đăng nhập thất bại
                console.error('Login failed', error);
                this.errorMessage = 'Invalid username or password'; // Đăng nhập không thành công
            }
        });
    }
}

