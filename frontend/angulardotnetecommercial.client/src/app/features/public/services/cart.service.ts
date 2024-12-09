import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ApiService } from '../../../core/services/api.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { API_ENDPOINTS } from '../../../core/constant/api.constant';
import { PublicService } from './public.service';
import { Icart } from '../../../data/models/ICart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
    private cartItemCountSource = new BehaviorSubject<number>(0); // Đặt giá trị ban đầu là 0
    cartItemCount$ = this.cartItemCountSource.asObservable(); // Observable để theo dõi sự thay đổi

    constructor(private publicService: PublicService) {
        this.publicService.getCart().subscribe((response: any) => {
            this.updateCartItemCount(response.items.length);
        });
    }


    // Hàm cập nhật số lượng item trong giỏ hàng
    updateCartItemCount(count: number): void {
        this.cartItemCountSource.next(count);
    }

    // Hàm lấy số lượng item hiện tại trong giỏ hàng
    getCartItemCount(): number {
        return this.cartItemCountSource.value;
    }
}
