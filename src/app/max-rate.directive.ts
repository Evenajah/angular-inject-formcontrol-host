import { Directive } from '@angular/core';

@Directive({
  selector: '[appMaxRate]',
  providers: [
    {
      provide: 'rate',
      useValue: 100,
    },
  ],
})
export class MaxRateDirective {
  constructor() {
    console.log('init');
  }
}
 