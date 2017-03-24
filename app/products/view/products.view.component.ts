import {Component} from '@angular/core';
import {Product} from '../product';
import {ActivatedRoute, Params} from "@angular/router";
import {ProductsDataService} from "../../service/products-data.service";
import 'rxjs/add/operator/switchMap';

@Component({
 selector: 'products-view',
 templateUrl: 'app/products/view/products.view.component.html',
 styleUrls:['app/products/view/products.view.component.css']
})
export class ProductsViewComponent {

	constructor(private route: ActivatedRoute, private productDataService:ProductsDataService){}
  product:Product;
	ngOnInit(){
    this.route.params
      .switchMap((params:Params) => this.
      productDataService.getProduct(+params['id']))
      .subscribe((product:Product)=>this.product=product);
	}
}
