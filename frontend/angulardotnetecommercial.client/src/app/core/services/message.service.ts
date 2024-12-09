import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    private messageSubject = new BehaviorSubject<string>('');
    message$ = this.messageSubject.asObservable();

    showMessage(msg: string) {
        this.messageSubject.next(msg);
    }

    clearMessage() {
        this.messageSubject.next('');
    }
}