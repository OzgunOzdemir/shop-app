import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ShopModule } from './shop/shop.module'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
