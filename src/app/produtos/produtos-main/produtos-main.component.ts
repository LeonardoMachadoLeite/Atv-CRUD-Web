import { ProdutosDbService } from './../service/produtos-db.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';

@Component({
  selector: 'app-produtos-main',
  templateUrl: './produtos-main.component.html',
  styleUrls: ['./produtos-main.component.css']
})
export class ProdutosMainComponent implements OnInit {

  listaProdutos: Produto[];

  prodDbService: ProdutosDbService;

  constructor(service: ProdutosDbService) {
    this.prodDbService = service;
  }

  ngOnInit(): void {
    this.prodDbService.getListaProduto().subscribe(arg => this.listaProdutos = arg);
  }



}
