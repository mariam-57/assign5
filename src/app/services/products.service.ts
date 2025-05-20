import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../interface/product';
import { HttpClient } from '@angular/common/http';
import { ProductResoponse } from '../interface/product-resoponse';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

private _favorites = new BehaviorSubject<Product[]>([]);
  public favoriteList = this._favorites.asObservable();
  constructor(private http: HttpClient) {}


  addToFavoriteProduct(product: Product) {
    const currentList = this._favorites.getValue();
    if (!currentList.includes(product)) {
      this._favorites.next([...currentList, product]);
    }
  }
   removeProduct(item: Product) {
    const updatedList = this._favorites
      .getValue()
      .filter((product) => product.id != item.id);
      this._favorites.next(updatedList)
  }

  getAllProduct(): Observable<ProductResoponse> {
    return this.http.get<ProductResoponse>(`https://dummyjson.com/products`);
  }
  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`https://dummyjson.com/products`);
  }}
