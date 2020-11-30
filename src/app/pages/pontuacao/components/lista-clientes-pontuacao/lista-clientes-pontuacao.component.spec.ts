import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaClientesPontuacaoComponent } from './lista-clientes-pontuacao.component';

describe('ListaClientesPontuacaoComponent', () => {
  let component: ListaClientesPontuacaoComponent;
  let fixture: ComponentFixture<ListaClientesPontuacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaClientesPontuacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaClientesPontuacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
