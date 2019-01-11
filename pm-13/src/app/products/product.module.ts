import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
        { path: 'products', component: ProductListComponent },
        { path: 'product/:id',
          canActivate: [ ProductDetailGuard ],
          component: ProductDetailComponent }
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent ,
    ProductDetailComponent,
    ConvertToSpacesPipe
  ]
})
export class ProductModule { }
