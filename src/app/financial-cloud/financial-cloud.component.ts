import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { FinancialCloudService } from '../services/financial-cloud.service';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-financial-cloud',
  templateUrl: './financial-cloud.component.html',
  styleUrls: ['./financial-cloud.component.scss'],
})
export class FinancialCloudComponent implements OnInit {
  data: any = [];
  displayedColumns: string[] = ['#', 'name', 'url'];
  dataSource = new MatTableDataSource(this.data);

  public pageSize = 151;
  public currentPage = 0;
  public totalSize = 151;

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  loading = false;

  constructor(
    private globalService: GlobalService,
    private _financialCloudService: FinancialCloudService
  ) {
    this.dataSource = new MatTableDataSource(this.data);
    this.globalService.setLayout({
      allowFooter: false,
      pageTitle: 'Pokemon List',
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  async ngOnInit() {
    try {
      this.loading = true;
      await this.fetchAllPokemonWithPaginator(this.currentPage, this.pageSize);
      this.loading = false;
    } catch (error) {
      this.loading = false;
    }
    this.dataSource = new MatTableDataSource(this.data);
    this.iterator();
  }

  public handlePage(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
    this.totalSize = e.length;
    this.fetchAllPokemonWithPaginator(this.currentPage, this.pageSize);
  }

  private iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    const part = this.data.slice(start, end);
    this.data = part;
  }

  async fetchAllPokemonWithPaginator(page?: number, limit?: number) {
    try {
      this.loading = true;
      const allPokemon = await this._financialCloudService.FetchAllPokemon(
        page,
        limit
      );
      const { results } = allPokemon;
      this.data = results;
      this.totalSize = this.data.length;
      this.iterator();
      this.loading = false;
    } catch (error) {
      this.loading = false;
    }
  }

  async applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.data = this.dataSource.filteredData;
  }
}
