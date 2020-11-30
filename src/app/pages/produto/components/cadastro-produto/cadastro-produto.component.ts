import { Observable } from 'rxjs';
import { CategoriaService } from './../../../categoria/services/categoria.service';
import { Categoria } from './../../../categoria/models/categoria';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ProdutoService } from '../../services/produto.service';

import { Produto } from '../../models/produto';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import * as _ from 'lodash';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})

export class CadastroProdutoComponent implements OnInit {

  public formulario: FormGroup;
  public msgError: String;
  public categorias$: Observable<Categoria[]>;
  public imageSrc: String;

  public fb: any;
  public downloadURL: Observable<String>;

  constructor(public produtoService: ProdutoService,
    public categoriaService: CategoriaService,
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CadastroProdutoComponent>,
    public storage: AngularFireStorage,
    @Inject(MAT_DIALOG_DATA) public data: Produto) { }

  ngOnInit() {
    this.msgError = "";
    this.imageSrc = "";
    this.categorias$ = this.categoriaService.getListaCategorias();
    console.log("ngOnInit CadastroProdutoComponent :" + this.data);
    this.novoFormulario();
    if (this.data != null) {
      this.formulario.get('idProduto').setValue(this.data.idProduto);
      this.formulario.get('nome').setValue(this.data.nome);
      this.formulario.get('status').setValue(this.data.status);
      this.formulario.get('pontosRecebidos').setValue(this.data.pontosRecebidos);
      this.formulario.get('pontosRetirada').setValue(this.data.pontosRetirada);
      this.formulario.get('urlImage').setValue(this.data.urlImage);
      this.imageSrc = this.data.urlImage;
      this.formulario.get('categoria').setValue(this.data.categoria);
    };
  }

  //método para carregar imagem escolhida ma página
  public onFileSelected(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSrc = reader.result as string;
      };
    }
    this.upload(event);
  }

  //método para enviar imagem para o Firebase Storage
  private upload(event: any) {
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `imagens-produtos/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`imagens-produtos/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
            }
            console.log("finalize upload url -> " + this.fb);
            this.formulario.get('urlImage').setValue(url);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log("subscribe upload url -> " + url);
          this.formulario.get('urlImage').setValue(url);
        }
      });
  }

  private novoFormulario(): void {
    this.formulario = new FormGroup({
      idProduto: new FormControl(null),
      nome: new FormControl(null, Validators.required),
      status: new FormControl(null, Validators.required),
      pontosRecebidos: new FormControl(null, Validators.required),
      pontosRetirada: new FormControl(null, Validators.required),
      urlImage: new FormControl(null),

      categoria: this.formBuilder.group({
        idCategoria: new FormControl(null),
        nome: new FormControl(null, Validators.required),
        status: new FormControl(null, Validators.required)
      })
    });
  }

  // define se uma produto será criada ou atualizada
  saveProduto() {
    if (this.formulario.get('idProduto').value != null) {
      console.log("updateCategoria CadastroProdutoComponent: " + this.formulario.value);
      this.produtoService.updateProduto(this.formulario.value).subscribe(
        (sucesso) => {
          console.log(sucesso);
          this.dialogRef.close();
        },
        error => {
          this.msgError = error;
          console.log("error updateCategoria CadastroProdutoComponent: " + error);
        });
    } else {
      console.log("saveCategoria CadastroProdutoComponent: " + this.formulario.value);
      this.produtoService.saveProduto(this.formulario.value).subscribe(
        (sucesso) => {
          console.log(sucesso);
          this.dialogRef.close();
        },
        error => {
          this.msgError = error;
          console.log("error saveCategoria CadastroProdutoComponent: " + error);
        });
    }
  }

  // resetar formulário
  public resetar(): void {
    this.formulario.reset();
    this.msgError = null;
    this.imageSrc = null;
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
  public compararCategorias(obj1: any, obj2: any) {
    return obj1 && obj2 ? (obj1.nome === obj2.nome) : obj1 === obj2;
  }

}

