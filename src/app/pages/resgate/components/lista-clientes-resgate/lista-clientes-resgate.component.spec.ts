import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaClientesResgateComponent } from './lista-clientes-resgate.component';

describe('ListaClientesResgateComponent', () => {
  let component: ListaClientesResgateComponent;
  let fixture: ComponentFixture<ListaClientesResgateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaClientesResgateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaClientesResgateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
