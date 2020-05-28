import { Produto } from '../produto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Config } from 'protractor';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProdutosDbService {

  apiBaseUrl: string;
  client: HttpClient;
  config: Config;

  constructor(httpClient: HttpClient) {
    this.apiBaseUrl = 'https://web-unit.herokuapp.com/produto';
    this.client = httpClient;
  }

  cadastrarProduto(produto: Produto) {
    return this.client.post(this.apiBaseUrl, produto).subscribe();
  }

  atualizarProduto(produto: Produto) {
    return this.client.post(this.apiBaseUrl, {
      id: produto.id,
      nome: produto.nome,
      valor: produto.valor
    });
  }

  getProduto(produto: Produto) {
    return this.client.get(this.apiBaseUrl + '/' + produto.id);
  }

  getListaProduto() {
    return this.client.get<Produto[]>(this.apiBaseUrl, { observe: 'body', responseType: 'json' });
  }

  deletarProduto(produto: Produto) {
    return this.client.delete(this.apiBaseUrl);
  }

}
