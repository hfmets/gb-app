import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  loading?: BehaviorSubject<boolean>;

  constructor() {
    this.loading = new BehaviorSubject<boolean>(false);
  }

  isLoading(): void {
    this.loading?.next(true);
  }

  isLoaded(): void {
    this.loading?.next(false);
  }

}
