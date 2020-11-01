import { Component, OnInit, Inject} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { FuncionarioService } from '../../services/funcionario.service';
import { Funcionario } from '../../models/funcionario';
import { NgForm } from '@angular/forms';

import { SuccessToastComponent } from '../success-toast/success-toast.component';

enum ToastPositionTypes {
  bottomCenter = 'toast-bottom-center',
  bottomRight = 'toast-bottom-right',
  bottomLeft = 'toast-bottom-left',
  topCenter = 'toast-top-center',
  topRight = 'toast-top-right',
  topLeft = 'toast-top-left'
}


@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent implements OnInit {

  public toastrPositionTypes: typeof ToastPositionTypes = ToastPositionTypes;
  public toastrPosition: string = this.toastrPositionTypes.topRight;
  public timeOut = 3000;
  public toastrLink: string = 'https://github.com/scttcper/ngx-toastr';

  funcionario = {} as Funcionario;
  listaFuncionario: Funcionario[];

  constructor(private funcionarioService: FuncionarioService, public dialogRef: MatDialogRef<CadastroFuncionarioComponent>, @Inject(MAT_DIALOG_DATA) public data: Funcionario, private toastrService: ToastrService) {}
  
  ngOnInit() {
    this.getListaFuncionario();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  // define se uma funcionario será criada ou atualizada
  saveFuncionario(form: NgForm) {
    this.funcionarioService.saveFuncionario(this.funcionario).subscribe(() => {
      this.cleanForm(form);
      this.showSuccess();
    });
  }

  // Chama o serviço para obter todas as funcionarios
  getListaFuncionario() {
    this.funcionarioService.getListaFuncionario().subscribe((listaFuncionario: Funcionario[]) => {
      this.listaFuncionario = listaFuncionario;
    });
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getListaFuncionario();
    form.resetForm();
    this.funcionario = {} as Funcionario;
  }

  public showSuccess(): void {
    this.toastrService.show(
      null,
      null,
      {
        positionClass: this.toastrPosition,
        toastComponent: SuccessToastComponent,
        timeOut: this.timeOut,
        tapToDismiss: false
      }
    );
  }

}
