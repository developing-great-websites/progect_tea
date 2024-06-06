import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { MainComponent } from './components/pages/main/main.component';
import { CatalogComponent } from './components/pages/catalog/catalog.component';
import {HttpClientModule} from "@angular/common/http";
import { LimitSymbolsPipe } from './pipes/limit-symbols.pipe';
import { ProductComponent } from './components/pages/product/product.component';
import {GetProductsService} from "./services/get-products.service";
import { OrderComponent } from './components/pages/order/order.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    CatalogComponent,
    LimitSymbolsPipe,
    ProductComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [GetProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
