import { ProductListComponent } from './product-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule
  ],
  exports: [ProductListComponent]
})
export class ProductListModule { }
