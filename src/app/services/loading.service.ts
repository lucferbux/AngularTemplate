import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() { }

  loading: Boolean;

  private loadingsource = new BehaviorSubject(this.loading);
  currentLoading = this.loadingsource.asObservable();

  setLoading(loadingState: Boolean) {
    this.loadingsource.next(loadingState);
  }
    
}
