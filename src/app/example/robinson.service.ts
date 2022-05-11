import { Injectable, OnDestroy } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Injectable()
export class RobinsonService implements OnDestroy {
  destroy$ = new AsyncSubject<void>();

  constructor() {}
  
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
