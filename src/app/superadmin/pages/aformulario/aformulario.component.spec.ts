import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AformularioComponent } from './aformulario.component';

describe('AformularioComponent', () => {
  let component: AformularioComponent;
  let fixture: ComponentFixture<AformularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AformularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AformularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
