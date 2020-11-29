import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPontuacaoComponent } from './lista-pontuacao.component';

describe('ListaPontuacaoComponent', () => {
  let component: ListaPontuacaoComponent;
  let fixture: ComponentFixture<ListaPontuacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPontuacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPontuacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
