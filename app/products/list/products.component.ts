import {Component} from '@angular/core';
import {Product} from '../product';
import {ProductsDataService} from "../../service/products-data.service";
import {Router} from "@angular/router";

@Component({
 selector: 'products',
 templateUrl: 'app/products/list/products.component.html',
 styleUrls:['app/products/list/products.component.css']
})
export class ProductsComponent {
	products: Product[];

  constructor (private productDataService:ProductsDataService, private router: Router){}
  ngOnInit(){
    this.productDataService.getProductsData()
      .subscribe(products => this.products= products);
  }

	upQuantity(product:Product){
    product.amountLeft++;
	}

	downQuantity(product:Product){
		if (product.amountLeft >0)
      product.amountLeft--;
	}
	showDetail(product: Product){
    this.router.navigate(['/detail',product.id]);
  }

  briefDescription(product:Product) {
    var text = product.name.toUpperCase() + " - " + product.description + " - " + product.price.toString() ;
    var brief = "";
    for(var i=0; i<48 ; i++){
      brief += text.charAt(i);
    }
    brief += "...";
    return brief;

  }


}
