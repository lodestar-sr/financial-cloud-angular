import { Injectable } from '@angular/core';

import { GlobalService } from './global.service';
import { RestApiService } from './rest-api.service';

@Injectable({
  providedIn: 'root',
})
export class FinancialCloudService {
  constructor(
    private _globalService: GlobalService,
    private _restApiService: RestApiService
  ) {
    this._globalService.setLayout({
      allowFooter: false,
      pageTitle: ' Poke Api Details',
    });
    this._globalService.setLoading(false);
  }

  async FetchAllPokemon(page?: number, limit?: number): Promise<any> {
    return await this._restApiService.get(
      `pokemon?page=${page}&limit=${limit}`
    );
  }
}
