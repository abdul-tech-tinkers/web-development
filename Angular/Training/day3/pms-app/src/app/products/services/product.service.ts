import { products } from 'src/data/products';
import { HttpClient } from '@angular/common/http';
import { createInjectableType } from '@angular/compiler';
import { Injectable, Inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { ApiResponse } from '../models/api-response.model';
import { PRODUCT_URL } from 'src/constants/app-constants';

// HttpClient is part of HttpClientModule should be imported in ur module.
@Injectable()
export class ProductService {
  constructor(
    private http: HttpClient,
    @Inject(PRODUCT_URL) private url: string
  ) {}
  getProducts(): Observable<ApiResponse<Product[]>> {
    // const products: Observable<Object> = this.http.get(this.url);
    // const productsPipe: Observable<ApiResponse<Product[]>> = products.pipe(
    //   map((response: any): ApiResponse<Product[]> => {
    //     return {
    //       message: response.message,
    //       data: response.data,
    //     };
    //   })
    // );
    return this.http.get<ApiResponse<Product[]>>(this.url);
  }
  getProductsById(id: number): Observable<ApiResponse<Product>> {
    // const found = products.find((product) => {
    //   return product.productId === id;
    // });
    // return { ...found };

    return this.http.get<ApiResponse<Product>>(`${this.url}/${id}`);
  }
}
