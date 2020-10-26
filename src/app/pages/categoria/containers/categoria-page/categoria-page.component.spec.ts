import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaPageComponent } from './categoria-page.component';

describe('CategoriaPageComponent', () => {
  let component: CategoriaPageComponent;
  let fixture: ComponentFixture<CategoriaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
