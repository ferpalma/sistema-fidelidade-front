
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CategoriaService } from '../../services/categoria.service';
import { Categoria } from '../../models/categoria';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-categoria',
  templateUrl: './cadastro-categoria.component.html',
  styleUrls: ['./cadastro-categoria.component.css']
})
export class CadastroCategoriaComponent implements OnInit {

  public formulario: FormGroup;
  public msgError: string;

  constructor(
    private categoriaService: CategoriaService,
    public dialogRef: MatDialogRef<CadastroCategoriaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Categoria) { }

  public ngOnInit() {
    this.msgError = null;
    console.log("ngOnInit CadastroCategoriaComponent :" + this.data);
    this.novoFormulario();
    if (this.data != null) {
      this.formulario.get('idCategoria').setValue(this.data.idCategoria);
      this.formulario.get('nome').setValue(this.data.nome);
      this.formulario.get('status').setValue(this.data.status);
    }
  }

  private novoFormulario(): void {
    this.formulario = new FormGroup({
      idCategoria: new FormControl(null),
      nome: new FormControl(null, Validators.required),
      status: new FormControl(null, Validators.required)
    });
  }

  // define se uma categoria será criada ou atualizada
  public saveCategoria() {
    if (this.formulario.get('idCategoria') != null) {
      console.log("updateCategoria CadastroCategoriaComponent: " + this.formulario.value);
      this.categoriaService.updateCategoria(this.formulario.value).subscribe(
        (sucesso) => {
          console.log(sucesso);
          this.dialogRef.close();
        },
        error => {
          this.msgError = error;
          console.log("error updateCategoria CadastroCategoriaComponent: " + error);
        });
    } else {
      console.log("saveCategoria CadastroCategoriaComponent: " + this.formulario.value);
      this.categoriaService.saveCategoria(this.formulario.value).subscribe(
        (sucesso) => {
        console.log(sucesso);
        this.dialogRef.close();
      },
      error => {
        this.msgError = error;
        console.log("error saveCategoria CadastroCategoriaComponent: " + error);
      });
    }
  }
  // resetar formulário
  public resetar(): void {
    this.formulario.reset();
    this.msgError = null;
  }

  // valida o campo do formulário
  public verificaValidTouched(campo: any) {
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }

  // aplica css de alerta para campo inválido
  public aplicaCssErro(campo: any) {
    return {
      'border-red': this.verificaValidTouched(campo)
    };
  }

}
