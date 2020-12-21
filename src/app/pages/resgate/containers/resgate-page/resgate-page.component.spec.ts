import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgatePageComponent } from './resgate-page.component';

describe('ResgatePageComponent', () => {
  let component: ResgatePageComponent;
  let fixture: ComponentFixture<ResgatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResgatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResgatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
