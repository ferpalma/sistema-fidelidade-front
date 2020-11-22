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

  constructor(private categoriaService: CategoriaService,
    public dialogRef: MatDialogRef<CadastroCategoriaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Categoria) { }

  public ngOnInit() {
    console.log("CadastroCategoriaComponent :" + this.data);
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
      console.log("updateCategoria :"+this.formulario.value);
      this.categoriaService.updateCategoria(this.formulario.value).subscribe(() => {
        this.resetar();
      });
    } else {
      console.log("saveCategoria :"+this.formulario.value);
      this.categoriaService.saveCategoria(this.formulario.value).subscribe(() => {
        this.resetar();
      });
    }
  }

  // resetar formulário
  public resetar(): void {
    this.formulario.reset();
    this.dialogRef.close();
  }

}
