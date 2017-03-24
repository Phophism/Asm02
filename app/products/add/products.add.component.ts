import {Component} from '@angular/core';
import {Product} from '../product';
import {ProductsDataService} from "../../service/products-data.service";
import  {Router} from '@angular/router';

@Component({
 selector: 'products-add',
 templateUrl: 'app/products/add/products.add.component.html',
 styleUrls:['app/products/add/products.add.component.css']
})
export class ProductsAddComponent {
	product: any={};
  constructor (private productDataService:ProductsDataService, private router: Router){};

  ngOnInit(){
    this.product=new Product();
  }

  upRating(product:Product){
    if (product.rating <5)
    product.rating++;
  }

  downRating(product:Product){
    if (product.rating >0)
      product.rating--;
  }

	upQuantity(product:Product){
		product.amountLeft++;
	}

	downQuantity(product:Product){
		if (product.amountLeft >0)
			product.amountLeft--;
	}
	addProduct(product:Product){
    console.log(product)

    if(product.rating>=0 && product.rating<=5 && product.price>=0 && product.amountLeft>=0) {          // check rating
      this.productDataService.addProduct(product);
      alert("Add complete!!");
      this.router.navigate(['/list']);
    }else
      alert("some information is invalid : try again!");

  }

  onFileChange(event,product:any){
    var filename=event.target.files[0].name;
    console.log(filename);
    product.image=filename;
  }

}
