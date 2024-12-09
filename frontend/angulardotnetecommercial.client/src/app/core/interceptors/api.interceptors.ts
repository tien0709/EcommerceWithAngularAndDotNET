import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, catchError, throwError } from "rxjs";
import { AuthServiceService } from "../authentication/services/auth-service.service";
import { MessageService } from "../services/message.service";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

    constructor(private authService: AuthServiceService, private router: Router, private messageService: MessageService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.getToken();
        if (token) {
            const apiReq = request.clone({
                setHeaders: {
                    //'content-type': 'application/json', bỏ vì để mặc địnhk multipartData để ưpload đc ảnh
                    'authorization': `Bearer ${this.getToken()}`
                }
            });
            return next.handle(apiReq).pipe(
                catchError((err: HttpErrorResponse) => {
                    if (err.status === 401) {
                        this.handleAuthError();
                    }
                    return throwError(() => err);
                })
            );
        }
        //dont have token
        return next.handle(request);
    }

    private handleAuthError() {
        // Xử lý khi gặp lỗi 401 (token hết hạn)
        this.authService.logout(); 
        this.messageService.showMessage('Phiên đăng nhập hết hạn, xin vui lòng đăng nhập lại');
        this.router.navigate(['/auth']); 
    }

    private getToken() {
        return localStorage.getItem('token') || '';
    }
}