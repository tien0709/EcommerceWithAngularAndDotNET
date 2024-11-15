import { Component } from '@angular/core';
import { ApiService } from '../../../../core/services/api.service';
import { Router } from '@angular/router';
import { API_ENDPOINTS } from '../../../../core/constant/api.constant';
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

    constructor(private apiService: ApiService, private router: Router) { }

    onSubmit() {
        if (this.password != this.repassword) {
            this.errorMessage = 'password have to identical with repassword';
            return;
        }
        const registerData = { Email: this.email, UserName: this.name, Password: this.password };
        this.apiService.post(API_ENDPOINTS.AUTHORIZATION.REGISTER, registerData).subscribe(response => {
            console.log('register successful', response);
            this.router.navigate(['/auth']); // Navigate to home page upon successful login
        }, error => {

            this.errorMessage = 'register unsuccessful';
        })
    }
}
