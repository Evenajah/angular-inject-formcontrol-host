import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ExampleComponent } from './example/example.component';
import { RobinsonService } from './example/robinson.service';
import { ExampleHostComponent } from './example-host/example-host.component';
import { MaxRateDirective } from './max-rate.directive';
import { HalfRateDirective } from './half-rate.directive';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    ExampleHostComponent,
    HelloComponent,
    MaxRateDirective,
    HalfRateDirective,
    ExampleComponent,
  ],
  providers: [RobinsonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
