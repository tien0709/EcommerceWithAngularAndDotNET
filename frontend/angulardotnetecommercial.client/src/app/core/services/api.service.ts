import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    constructor(private http: HttpClient) { }

    private createUrl(endpoint: string): string {
        return  `${environment.apiUrl}${endpoint}`
    }

    get<T>(endpoint: string, params?: any): Observable<T> {
        const httpParams = new HttpParams({ fromObject: params || {} });
        return this.http.get<T>(this.createUrl(endpoint), { params: httpParams });
    }

    post<T>(endpoint: string, body: any): Observable<T> {
        return this.http.post<T>(this.createUrl(endpoint), body)
    }

    put<T>(endpoint: string, body: any): Observable<T> {
        return this.http.put<T>(this.createUrl(endpoint), body)
    }

    delete<T>(endpoint: string, body: any) {
        return this.http.delete<T>(this.createUrl(endpoint), { body });
    }
}