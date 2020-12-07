import { Component, OnInit } from '@angular/core';
import { CadastroPromocaoComponent } from '../cadastro-promocao/cadastro-promocao.component';
import {MatDialog} from '@angular/material/dialog';
import { Promocao } from './../../models/promocao';
import { Observable } from 'rxjs';
import { PromocaoService } from '../../services/promocao.service';
@Component({
  selector: 'app-lista-promocao',
  templateUrl: './lista-promocao.component.html',
  styleUrls: ['./lista-promocao.component.css']
})
export class ListaPromocaoComponent implements OnInit {

  public listaPromocoes$: Observable<Promocao[]>;

  ngOnInit(): void {
   this.getListaPromocoes();
  }
  constructor(public dialog: MatDialog,
    private promocaoService: PromocaoService) {}
   // Chama o serviço para obtém todas as promocoes
   private getListaPromocoes() {
    this.listaPromocoes$ = this.promocaoService.getListaPromocoes();
  }

public openDialog() {
  this.dialog.open(CadastroPromocaoComponent, {
    width: '50%'
  });
  this.dialog.afterAllClosed.subscribe(() => { this.getListaPromocoes(); });
}

  // deleta uma Promocao
  public deletePromocao(promocao: Promocao) {
    console.log("deletePromocao :" + promocao.nome);
    this.promocaoService.deletePromocao(promocao).subscribe((res) => {
      this.getListaPromocoes();
    });
  }

  public editPromocao(promocao: Promocao): void {
    console.log("editPromocao :" + promocao.nome);
    this.dialog.open(CadastroPromocaoComponent, {
      width: '50%',
      data: promocao
    });
    this.dialog.afterAllClosed.subscribe(() => { this.getListaPromocoes(); });
  }

}
