import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RobinsonService } from './example/robinson.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{ provide: 'WhatTheFuck', useValue: 100 }],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  formGroup = new FormGroup({
    example1: new FormControl(10),
  });
}
