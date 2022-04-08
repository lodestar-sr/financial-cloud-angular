import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialCloudRoutingModule } from './financial-cloud-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { NgxLoadingModule } from 'ngx-loading';
import { FinancialCloudComponent } from './financial-cloud.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [FinancialCloudComponent],
  imports: [
    CommonModule,
    FinancialCloudRoutingModule,
    MatButtonModule,
    NgxLoadingModule.forRoot({}),
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
  ],

  exports: [],
})
export class FinancialCloudModule {}
