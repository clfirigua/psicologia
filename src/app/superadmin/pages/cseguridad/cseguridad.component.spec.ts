import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CseguridadComponent } from './cseguridad.component';

describe('CseguridadComponent', () => {
  let component: CseguridadComponent;
  let fixture: ComponentFixture<CseguridadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CseguridadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CseguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
