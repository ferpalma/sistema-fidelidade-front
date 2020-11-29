import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PontuacaoPageComponent } from './pontuacao-page.component';

describe('PontuacaoPageComponent', () => {
  let component: PontuacaoPageComponent;
  let fixture: ComponentFixture<PontuacaoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PontuacaoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PontuacaoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
