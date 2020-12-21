import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroResgateComponent } from './cadastro-resgate.component';

describe('CadastroResgateComponent', () => {
  let component: CadastroResgateComponent;
  let fixture: ComponentFixture<CadastroResgateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroResgateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroResgateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
