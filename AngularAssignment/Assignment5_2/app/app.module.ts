import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { SecongCompComponent } from './secong-comp/secong-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent,
    SecongCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
