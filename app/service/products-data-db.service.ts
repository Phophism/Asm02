import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {Subscriber} from  "rxjs/Subscriber";
import {Product} from "../products/product";

@Injectable()
export class ProductsDataDBService{
  products:Product[]=[
    {
      "id": 1,
      "productId":"SNIS-360",
      "name":"kirara Asuka",
      "description":"Pillow Sales Asuka Kirara Of Life Insurance Lady",
      "image":"images/kirara.jpg",
      "price":300,
      "amountLeft": 4,
      "rating": 4
    },
    {
      "id": 2,
      "productId":"ABP-108",
      "name":"Kakitani Hikaru",
      "description":"Little daughter",
      "image":"images/hikaru.jpg",
      "price":500,
      "amountLeft": 10,
      "rating": 3
    },
    {
      "id": 3,
      "productId":"ABP-108",
      "name":"Erika Momotani",
      "description":"Solo-work Beautiful GirlSlender",
      "image":"images/erika.jpg",
      "price":350,
      "amountLeft": 3,
      "rating": 4
    }
];

  getProductsData(){
    return new Observable<Product[]>((subscriber:Subscriber<Product[]>)=>subscriber.next(this.products));
  }
  getProduct(id:number){
    let product = this.products.find(product=> product.id === +id);
    return new Observable<Product>((subscriber:Subscriber<Product>)=>subscriber.next(product));
  }
  addProduct(product:Product){
    product.id=this.products.length+1;
    this.products.push(product);
  }

}
