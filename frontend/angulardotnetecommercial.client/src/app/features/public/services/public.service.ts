import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ApiService } from '../../../core/services/api.service';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../../../core/constant/api.constant';

@Injectable({
  providedIn: 'root'
})
export class PublicService {
    constructor(private apiService: ApiService) { }

    getProducts(params?: any): Observable<any[]> {
        return this.apiService.get(API_ENDPOINTS.PRODUCTS.LIST, params);
    }

    getProduct(productId: string): Observable<any> {
        console.log(productId)
        return this.apiService.get(`${API_ENDPOINTS.PRODUCTS.LIST}/${productId}`, {});
    }

    addProduct(params?: any): Observable<any[]> {
        return this.apiService.post(API_ENDPOINTS.PRODUCTS.CREATE, params);
    }

    deleteProduct(productId: string): Observable<any> {
        // Gửi yêu cầu DELETE tới URL đúng
        return this.apiService.delete(`${API_ENDPOINTS.PRODUCTS.DELETE}/${productId}`, {});
    }

    updateProduct(params?: any): Observable<any[]> {
        return this.apiService.put(API_ENDPOINTS.PRODUCTS.UPDATE, params);
    }


    getCategories(params?: any): Observable<any[]> {
        return this.apiService.get(API_ENDPOINTS.CATEGORIES.LIST, params);
    }

    addCategories(params?: any): Observable<any[]> {
        return this.apiService.post(API_ENDPOINTS.CATEGORIES.CREATE, params);
    }

    deleteCategorie(params?: any): Observable<any[]> {
        return this.apiService.delete(API_ENDPOINTS.CATEGORIES.DELETE, params);
    }

    updateCategories(params?: any): Observable<any[]> {
        return this.apiService.put(API_ENDPOINTS.CATEGORIES.UPDATE, params);
    }


    getAbout(params?: any): Observable<any[]> {
        return this.apiService.get(API_ENDPOINTS.ABOUT.LIST, params);
    }

    updateAbout(params?: any): Observable<any[]> {
        return this.apiService.put(API_ENDPOINTS.ABOUT.UPDATE, params);
    }


    getContact(params?: any): Observable<any[]> {
        return this.apiService.get(API_ENDPOINTS.CONTACT.LIST, params);
    }

    updateContact(params?: any): Observable<any[]> {
        return this.apiService.put(API_ENDPOINTS.CONTACT.UPDATE, params);
    }


    getBlogs(params?: any): Observable<any[]> {
        return this.apiService.get(API_ENDPOINTS.BLOGS.LIST, params);
    }

    getBlog(blogId: string): Observable<any> {
        return this.apiService.get(`${API_ENDPOINTS.BLOGS.LIST}/${blogId}`, {});
    }

    addBlog(params?: any): Observable<any[]> {
        return this.apiService.post(API_ENDPOINTS.BLOGS.CREATE, params);
    }

    deleteBlog(blogId: string): Observable<any[]> {
        return this.apiService.delete(`${API_ENDPOINTS.BLOGS.DELETE}/${blogId}`, {});
    }

    updateBlog(params?: any): Observable<any[]> {
        return this.apiService.put(API_ENDPOINTS.BLOGS.UPDATE, params);
    }

    getUser(params?: any): Observable<any[]> {
        return this.apiService.get(API_ENDPOINTS.USERS.LIST, params);
    }

    getCart(params?: any): Observable<any> {
        return this.apiService.get(API_ENDPOINTS.CARTS.LIST, params);
    }

    addItemToCart(productId: string): Observable<any> {
        return this.apiService.put(`${API_ENDPOINTS.CARTS.UPDATE}/${productId}`, {});
    }

    sendEmail(subject: string, body: string): Observable<any> {
        return this.apiService.post(API_ENDPOINTS.EMAIL.SEND, { subject, body });
    }

    excutePayment(params?: any): Observable<any> {
        console.log(params);
        return this.apiService.post(API_ENDPOINTS.MOMO.PAYMENT, params);
    }

}
