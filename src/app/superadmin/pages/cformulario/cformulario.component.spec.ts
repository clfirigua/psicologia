import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CformularioComponent } from './cformulario.component';

describe('CformularioComponent', () => {
  let component: CformularioComponent;
  let fixture: ComponentFixture<CformularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CformularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CformularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
