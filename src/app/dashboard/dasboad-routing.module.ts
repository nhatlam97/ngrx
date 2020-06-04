import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'shop',
    pathMatch: 'full'
  },
  {
    path: 'enterprise',
    loadChildren: () => import('./enterprise/enterprise.module').then(mod => mod.EnterpriseModule),
  },
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then(mod => mod.ShopModule),
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DasboadRoutingModule {
}
