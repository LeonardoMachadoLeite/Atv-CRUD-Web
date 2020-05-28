import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProdutosMainComponent } from './produtos-main/produtos-main.component';
import { ListProdutosComponent } from './list-produtos/list-produtos.component';
import { CreateFormComponent } from './create-form/create-form.component';


@NgModule({
  declarations: [
    ListProdutosComponent,
    CreateFormComponent,
    ProdutosMainComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  exports: [
    CreateFormComponent,
    ListProdutosComponent,
    ProdutosMainComponent
  ],
  providers: [
    HttpClientModule
  ]
})
export class ProdutosModule { }
