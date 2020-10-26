import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoPageComponent } from './produto-page.component';

describe('ProdutoPageComponent', () => {
  let component: ProdutoPageComponent;
  let fixture: ComponentFixture<ProdutoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
