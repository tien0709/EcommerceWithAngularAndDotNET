import { Component } from '@angular/core';
import { IcartItem } from '../../../data/models/ICartItem';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicService } from '../services/public.service';
import { AuthServiceService } from '../../../core/authentication/services/auth-service.service';
import { ToastrService } from 'ngx-toastr';
import { Iorder } from '../../../data/models/IOrder';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
    address = "";
    email: string = "";
    cartItems: IcartItem[] = []
    quantity: number = 0;
    total: number = 0;
    userName: string | null = null;
    paymentMethod: string = "";
    constructor(private publicService: PublicService, private route: ActivatedRoute,
        private authService: AuthServiceService, private toastr: ToastrService, private router: Router) {
        this.route.queryParamMap.subscribe(params => {
            const cartItemsString = params.get('items');
            if (cartItemsString) {
                this.cartItems = JSON.parse(cartItemsString); // Deserialize back to an array
            }
        });
    }

    ngOnInit() {
        this.publicService.getCart().subscribe((response: any) => {
            this.cartItems = response.items

            for (let item of this.cartItems) {
                this.quantity += item.quantity;
                this.total += item.quantity * item.product.price;
            }// bỏ for ngoài là chạy song song đó

            this.userName = this.authService.getUserName();
        });

    }

    submitOrder() {
        if (this.paymentMethod == "onReceive") {
            //gửi mail
            const currentDate = new Date().toLocaleString(); // Gets current date and time as a string
            const emailSubject = 'Xác nhận Đặt Hàng thành công';
            const emailBody = `
            Bạn đã đặt hàng thành công tại ... vào ngày ${currentDate}, 
            phương thức thanh toán: thanh toán sau khi nhận hàng, 
            tổng số tiền: ${this.total} VNĐ.`;

            this.publicService.sendEmail(emailSubject, emailBody).subscribe((response: any) => {
            });
            // thêm vào db Order
            this.success();
            setTimeout(() => {
                this.router.navigate(['/products']);  // Đường dẫn bạn muốn chuyển hướng đến
            }, 2000);

            // xóa item cart
        } else {// MoMo
            //chuyển trang thanh toán
            const order: Iorder = {
                id: "",
                userId: "",
                email: this.email,   // Giả sử this.email là một chuỗi
                address: this.address, // Giả sử this.address là một chuỗi
                total: this.total*1.1, // Giả sử this.total là một số
            };
            this.publicService.excutePayment(order).subscribe((response: any) => {
                console.log(response);
                if (response && response.url) {
                    // Redirect the user to the payment URL
                    window.location.href = response.url;
                } else {
                    console.error('Payment URL not found in response');
                }
            });
            // thêm vào db Order

            //gửi mail
            /*const currentDate = new Date().toLocaleString(); // Gets current date and time as a string
            const emailSubject = 'Xác nhận Đặt Hàng thành công';
            const emailBody = `
            Bạn đã đặt hàng thành công tại ... vào ngày ${currentDate}, 
            phương thức thanh toán: thanh toán sau khi nhận hàng, 
            tổng số tiền: ${this.total} VNĐ.`;

            this.publicService.sendEmail(emailSubject, emailBody).subscribe((response: any) => {
            });*/

        }
    }

    success(): void {
        this.toastr.success('', 'Đặt hàng thành công');
    }
}
