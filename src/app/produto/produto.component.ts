
import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto';
import { ProdutoService } from '../service/produto.service'

@Component({
    selector: 'app-produto',
    templateUrl: './produto.component.html',
    styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

    produto: Produto;
    success: boolean = false;
    errors: String[];
    constructor(private service: ProdutoService) {
        this.produto = new Produto();
    }

    ngOnInit(): void {
    }

    onSubmit() {

        this.service.
            salvar(this.produto).
            subscribe(response => {
                this.success = true;
                this.errors = null;
            }, errorResponse => {
                this.success = false;
                this.errors = errorResponse.error.errors;
            }
         );
    }
}