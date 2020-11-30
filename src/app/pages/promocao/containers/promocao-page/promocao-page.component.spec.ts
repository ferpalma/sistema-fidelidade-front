import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocaoPageComponent } from './promocao-page.component';

describe('PromocaoPageComponent', () => {
  let component: PromocaoPageComponent;
  let fixture: ComponentFixture<PromocaoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromocaoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocaoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
