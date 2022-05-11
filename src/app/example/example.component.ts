import {
  Component,
  Host,
  Inject,
  Input,
  OnInit,
  Optional,
  Self,
  SkipSelf,
} from '@angular/core';
import { ControlContainer, FormControl } from '@angular/forms';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
  providers: [{ provide: 'WhatTheFuck', useValue: 50 }],
})
export class ExampleComponent implements OnInit {
  @Input() value: number;

  valueDisplay: number;
  example1Form = null;

  constructor(
    @Host() private control: ControlContainer,
    @Inject('rate') private rate: number
  ) {}

  ngOnInit() {
    this.example1Form = this.control.control.get('example1') as FormControl;
    this.valueDisplay = this.rate * this.value;
  }
}
