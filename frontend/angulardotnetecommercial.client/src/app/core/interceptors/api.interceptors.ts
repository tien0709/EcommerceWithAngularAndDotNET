import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.getToken();
        if (token) {
            const apiReq = request.clone({
                setHeaders: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${this.getToken()}`
                }
            });
            return next.handle(apiReq);
        }
        return next.handle(request);
    }

    private getToken() {
        return localStorage.getItem('token') || '';
    }
}