import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproduct } from '../shared/models/Product';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
   baseUrl = "https://localhost:5001/api/"
    constructor(private http: HttpClient) { }

    getProducts() {
        return this.http.get<Iproduct>(this.baseUrl + 'products');
    }
}
