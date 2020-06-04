import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
const routes = [
  {
    path: '',
    redirectTo: 'business',
    pathMatch: 'full'
  },
  {
    path: 'business',
    loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
