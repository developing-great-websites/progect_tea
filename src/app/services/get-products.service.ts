import {Injectable} from '@angular/core';
import {ProductType} from "../types/product.type";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetProductsService {

  private products: ProductType[];

  constructor(private http: HttpClient) {
    this.products = [];
  }

  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>('https://testologia.ru/tea');
  }

  getProduct(id: number): Observable<ProductType> {
    return this.http.get<ProductType>(`https://testologia.ru/tea?id=${id}`);
  }

  createOrder(data:
                {
                  name: string,
                  last_name: string,
                  phone: string,
                  country: string,
                  zip: string,
                  product: string,
                  address: string,
                  comment: string,
                }) {
    return this.http.post<{ success: number, message?: string }>(`https://testologia.ru/order-tea`, data);
  }

}
