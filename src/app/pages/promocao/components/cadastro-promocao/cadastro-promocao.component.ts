import { Observable } from 'rxjs';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PromocaoService } from '../../services/promocao.service';
import { Promocao } from '../../models/promocao';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import * as _ from 'lodash';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-cadastro-promocao',
  templateUrl: './cadastro-promocao.component.html',
  styleUrls: ['./cadastro-promocao.component.css']
})


export class CadastroPromocaoComponent implements OnInit {


  public formulario: FormGroup;
  public msgError: String;
  public imageSrc: String;
  public firebaseURL: any;
  public downloadURL: Observable<String>;

  constructor(public promocaoService: PromocaoService,
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CadastroPromocaoComponent>,
    public storage: AngularFireStorage,
    @Inject(MAT_DIALOG_DATA) public data: Promocao) { }

  ngOnInit() {
    this.msgError = "";
    this.imageSrc = "";
    console.log("ngOnInit CadastroPromocaoComponent :" + this.data);
    this.novoFormulario();
    if (this.data != null) {
      this.formulario.get('idPromocao').setValue(this.data.idPromocao);
      this.formulario.get('nome').setValue(this.data.nome);
      this.formulario.get('status').setValue(this.data.status);
      this.formulario.get('urlImage').setValue(this.data.urlImage);
      this.imageSrc = this.data.urlImage;
    }
  }

  // método para carregar imagem escolhida ma página
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

  // método para enviar imagem para o Firebase Storage
  private upload(event: any) {
    const n = Date.now();
    const file = event.target.files[0];
    const filePath = `imagens-promocoes/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.firebaseURL = url;
            }
            console.log("finalize upload url -> " + this.firebaseURL);
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
      idPromocao: new FormControl(null),
      nome: new FormControl(null, Validators.required),
      status: new FormControl(true),
      urlImage: new FormControl(null)
    });
  }

  // define se uma promocao será criada ou atualizada
  savePromocao() {
    if (this.formulario.valid) {
      if (this.formulario.get('idPromocao').value != null) {
        console.log(" CadastroPromocaoComponent: " + this.formulario.value);
        this.promocaoService.updatePromocao(this.formulario.value).subscribe(
          (sucesso) => {
            console.log(sucesso);
            this.dialogRef.close();
          },
          error => {
            this.msgError = error;
            console.log("error CadastroPromocaoComponent: " + error);
          });
      } else {
        console.log("CadastroPromocaoComponent: " + this.formulario.value);
        this.promocaoService.savePromocao(this.formulario.value).subscribe(
          (sucesso) => {
            console.log(sucesso);
            this.dialogRef.close();
          },
          error => {
            this.msgError = error;
            console.log("error CadastroPromocaoComponent: " + error);
          });
      }
    } else {
      this.msgError = "O formulário não está válido!";
    }
  }

  // resetar formulário
  public resetar(): void {
    this.formulario.reset();
    this.msgError = null;
    this.imageSrc = null;
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
