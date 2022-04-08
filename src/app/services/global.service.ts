import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject, BehaviorSubject } from 'rxjs';
import { ILayout } from '../utils/layout.interface';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  private pageTitleSource = new Subject<ILayout>();
  private _loading = false;
  private loadingSource = new BehaviorSubject<boolean>(false);
  pageTitle$ = this.pageTitleSource.asObservable();
  loading$ = this.loadingSource.asObservable();

  constructor(private _snackbar: MatSnackBar) {}

  getShortDateWithTime(x: Date) {
    const d = new Date(x).toLocaleDateString();
    const t = new Date(x).toLocaleTimeString();
    return `${d} ${t}`;
  }

  setLayout(layout: ILayout) {
    setTimeout(() => {
      this.pageTitleSource.next(layout);
    });
  }

  setLoading(loading: boolean) {
    if (this._loading === loading) {
      return;
    }
    //  console.log(this._loading);
    this._loading = loading;
    setTimeout(() => {
      this.loadingSource.next(loading);
    }, 0);
  }

  showMessageSuccess(message: string, duration?: number) {
    this._snackbar.open(message, 'Success:', {
      duration: duration ? duration : 3000,
      panelClass: ['success-snackbar'],
    });
    this._loading = false;
    this.loadingSource.next(this._loading);
  }

  showMessageError(message: string, duration?: number) {
    this._snackbar.open(message, 'Error:', {
      duration: duration ? duration : 3000,
      panelClass: ['error-snackbar'],
    });
    this._loading = false;
    this.loadingSource.next(this._loading);
  }
}
