import {NgModel} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {FileNotComponent} from "../filenotfound/file-not-found-component";
import {ProductsComponent} from "../products/list/products.component";
import {ProductsAddComponent} from "../products/add/products.add.component";
import {ProductsViewComponent} from "../products/view/products.view.component";
import {NgModule} from "@angular/core";
/**
 * Created by CAMT on 2/17/2017.
 */
const productRoutes: Routes=[

  {path:'add',component: ProductsAddComponent},
  {path:'detail/:id',component: ProductsViewComponent},
  {path:'view', component: ProductsViewComponent
    ,
    data: {
      product: {
        "id": 1,
        "productId":"SP-001",
        "name":"Koa",
        "description":"Are you Koa?",
        "price":100,
        "image":"http://ec2-54-254-254-167.ap-southeast-1.compute.amazonaws.com/331-lab03/pics/tu.jpg",
        "amountLeft": 0,
        "rating": 0
      }
    }
  },
  {path:'list',component: ProductsComponent},
  {path:'',
    redirectTo:'/add',
    pathMatch:'full'
  },
  {path:'**',component: FileNotComponent},
];

@NgModule({
  imports:[RouterModule.forRoot(productRoutes)],
  exports:[RouterModule]
})
export class ProductRoutingModule{

}
