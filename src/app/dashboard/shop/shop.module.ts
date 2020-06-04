import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShopComponent} from './shop.component';
import {ShopRoutingModule} from './shop-routing.module';

// @ts-ignore
@NgModule({
  declarations: [ShopComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
  ]
})
export class ShopModule {
}
