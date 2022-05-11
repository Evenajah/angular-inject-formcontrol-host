import { Directive } from '@angular/core';

@Directive({
  selector: '[appHalfRate]',
  providers: [
    {
      provide: 'rate',
      useValue: 50,
    },
  ],
})
export class HalfRateDirective {
  constructor() {}
}
