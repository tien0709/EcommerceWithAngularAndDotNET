import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ApiService } from '../../../core/services/api.service';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../../../core/constant/api.constant';

@Injectable({
  providedIn: 'root'
})
export class CardFadeInService {
    constructor(private apiService: ApiService) { }

    getProducts(params ?: any): Observable < any[] > {
            return this.apiService.get(API_ENDPOINTS.PRODUCTS.LIST, params);
    }
}
