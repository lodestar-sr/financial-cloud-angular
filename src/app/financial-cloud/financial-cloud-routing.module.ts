import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialCloudComponent } from './financial-cloud.component';

const routes: Routes = [
  {
    path: '',
    component: FinancialCloudComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinancialCloudRoutingModule {}
