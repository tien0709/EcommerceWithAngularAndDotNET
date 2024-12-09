import { Component } from '@angular/core';
import { ApiService } from '../../../../core/services/api.service';
import { Router } from '@angular/router';
import { API_ENDPOINTS } from '../../../../core/constant/api.constant';
import { MessageService } from '../../../../core/services/message.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
    name: string = ""
    password: string = ""
    repassword: string = ""
    email: string = ""
    errorMessage: string = ""

    constructor(private apiService: ApiService, private router: Router, private messageService: MessageService) { }

    onSubmit() {
        if (this.password != this.repassword) {
            this.errorMessage = 'Mật khẩu và nhập lại mật khẩu không khớp';
            return;
        }

        if (!this.isStrongPassword(this.password)) {
            this.errorMessage = 'Mật khẩu không đủ mạnh. Mật khẩu phải có ít nhất 8 ký tự, chứa chữ hoa, chữ thường, số và ký tự đặc biệt.';
            return;
        }

        const registerData = { Email: this.email, UserName: this.name, Password: this.password };
        this.apiService.post(API_ENDPOINTS.AUTHORIZATION.REGISTER, registerData).subscribe(response => {
            this.messageService.showMessage('Đăng kí thành công');
            this.router.navigate(['/auth']); // Navigate to home page upon successful login
        }, error => {

            this.errorMessage = error.error.message + error.error.error;
        })
    }

    isStrongPassword(password: string): boolean {
        const minLength = 8;
        const upperCasePattern = /[A-Z]/; // Kiểm tra chữ hoa
        const lowerCasePattern = /[a-z]/; // Kiểm tra chữ thường
        const numberPattern = /\d/;       // Kiểm tra số
        const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/; // Kiểm tra ký tự đặc biệt

        // Kiểm tra mật khẩu có đủ các điều kiện hay không
        return password.length >= minLength &&
            upperCasePattern.test(password) &&
            lowerCasePattern.test(password) &&
            numberPattern.test(password) &&
            specialCharPattern.test(password);
    }
}
