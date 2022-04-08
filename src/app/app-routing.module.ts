import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'financial-cloud',
    loadChildren: () =>
      import('./financial-cloud/financial-cloud.module').then(
        (m) => m.FinancialCloudModule
      ),
  },

  {
    path: '',
    redirectTo: 'financial-cloud',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'financial-cloud',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
