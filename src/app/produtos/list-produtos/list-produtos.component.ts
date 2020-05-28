import { Produto } from './../produto';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-produtos',
  templateUrl: './list-produtos.component.html',
  styleUrls: ['./list-produtos.component.css']
})
export class ListProdutosComponent implements OnInit {

  @Input() listaProdutos: Produto[];

  constructor() {
    this.listaProdutos = [];
   }

  ngOnInit(): void {
  }

}
