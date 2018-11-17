import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IProduct } from './product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private _productUrl = 'api/products/products.json';
    
    constructor(private _http: HttpClient) { }
    
    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }
    
    private handleError(err: HttpErrorResponse) {
        console.error(err);
        return Observable.throw(err);
    }
}