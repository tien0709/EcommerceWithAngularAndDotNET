import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproduct } from '../shared/models/Product';

@Injectable({
  providedIn: 'root'
})
export class CardFadeInService {
   baseUrl = "https://localhost:7012/api/"
    constructor(private http: HttpClient) { }

    getProducts() {
        return this.http.get<Iproduct[]>('/api/products');
    }
}
