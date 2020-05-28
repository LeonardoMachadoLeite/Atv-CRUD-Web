import { FormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { ProdutosDbService } from '../service/produtos-db.service';
import { Component, OnInit, OnChanges, Input, Output } from '@angular/core';
import { Produto } from '../produto';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  nome: string;
  valor: number;
  dbService: ProdutosDbService;

  produtoForm: FormGroup;

  constructor(service: ProdutosDbService, private formBuilder: FormBuilder) {
    this.dbService = service;
    this.nome = '';
   }

  ngOnInit(): void {
    this.produtoForm = this.formBuilder.group({
      nome: [null],
      valor: [null]
    });
  }

  OnClickCadastrar(event) {
    console.log(this.produtoForm.value);
    this.dbService.cadastrarProduto(this.produtoForm.value);
  }

}
