import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  ulr = "http//localhost:3000/products";

  constructor( private http: HttpClient) { }

getProducts() : Observable<Product[]>{
  return this.http.get<Product[]>(this.ulr);

}

save(product: Product ) : Observable<Product>{
    return this.http.post<Product>(this.ulr, product);
  }

}
