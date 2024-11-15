import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

    constructor(private http: HttpClient) { }

    login(username: string, password: string): Observable<any>  {
        return this.http.post<any>(environment.apiUrl + '/authorization', { username, password }).pipe(
            map(response => {
                if (response && response.token) {
                    localStorage.setItem('token', response.token);
                    localStorage.setItem('username', response.username);
                }
                return response;
            })
        );
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        return { success: '', role: '' };
    }

    isLoggedIn() {
        const loggedIn = localStorage.getItem('token');
        return loggedIn!=null;
    }

    getUserName() {
        const userName = localStorage.getItem('username');
        return userName;
    }
}
