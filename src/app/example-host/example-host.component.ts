import { Component, OnInit } from '@angular/core';
import { RobinsonService } from '../example/robinson.service';

@Component({
  selector: 'app-example-host',
  templateUrl: './example-host.component.html',
  styleUrls: ['./example-host.component.css'],
  providers: [RobinsonService],
})
export class ExampleHostComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
