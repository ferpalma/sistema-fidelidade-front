import { Observable } from 'rxjs';
import { CategoriaService } from './../../../categoria/services/categoria.service';
import { Categoria } from './../../../categoria/models/categoria';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ProdutoService } from '../../services/produto.service';

import { Produto } from '../../models/produto';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})

export class CadastroProdutoComponent implements OnInit {

  public formulario: FormGroup;
  public categorias$: Observable<Categoria[]>;

  constructor(private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CadastroProdutoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Produto) { }

  ngOnInit() {
    this.categorias$ = this.categoriaService.getListaCategorias();
    console.log("CadastroProdutoComponent :" + this.data);
    this.novoFormulario();
    if (this.data != null) {
      this.formulario.get('idCategoria').setValue(this.data.idProduto);
      this.formulario.get('nome').setValue(this.data.nome);
      this.formulario.get('status').setValue(this.data.status);
      this.formulario.get('pontosRecebidos').setValue(this.data.pontosRecebidos);
      this.formulario.get('pontosRetirada').setValue(this.data.pontosRetirada);
      this.formulario.get('imagem').setValue(this.data.imagem);
      this.formulario.get('type').setValue(this.data.type);
      this.formulario.get('categoria').setValue(this.data.categoria);
    };
  }

  private novoFormulario(): void {
    this.formulario = new FormGroup({
      idProduto: new FormControl(null),
      nome: new FormControl(null, Validators.required),
      status: new FormControl(null, Validators.required),
      pontosRecebidos: new FormControl(null, Validators.required),
      pontosRetirada: new FormControl(null, Validators.required),
      imagem: new FormControl(null),
      type: new FormControl(null),
      categoria: this.formBuilder.group({
        idCategoria: new FormControl(null),
        nome: new FormControl(null, Validators.required),
        status: new FormControl(null, Validators.required)
      })
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  // define se uma produto será criada ou atualizada
  saveProduto() {
    if (this.formulario.get('idProduto') != null) {
      console.log("updateProduto :" + this.formulario.value);
      this.produtoService.updateProduto(this.formulario.value).subscribe(() => {
        this.resetar();
      });
    } else {
      console.log("saveProduto :" + this.formulario.value);
      this.produtoService.saveProduto(this.formulario.value).subscribe(() => {
        this.resetar();
      });
    }
  }

  // resetar formulário
  public resetar(): void {
    this.formulario.reset();
    this.dialogRef.close();
  }

  //valida o campo do formulário
  public verificaValidTouched(campo: any) {
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }

  //aplica css de alerta para campo inválido
  public aplicaCssErro(campo: any) {
    return {
      'border-red': this.verificaValidTouched(campo)
    };
  }

  //compara categorias
  public compararCategorias(obj1, obj2) {
    return obj1 && obj2 ? (obj1.nome === obj2.nome && obj1.nivel === obj2.nivel) : obj1 === obj2;
  }
  
}

