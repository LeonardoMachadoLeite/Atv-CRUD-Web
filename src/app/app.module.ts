import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProdutosModule } from './produtos/produtos.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProdutosDbService } from './produtos/service/produtos-db.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProdutosModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    HttpClientModule,
    ProdutosDbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
