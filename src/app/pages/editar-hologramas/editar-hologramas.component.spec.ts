import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarHologramasComponent } from './editar-hologramas.component';

describe('EditarHologramasComponent', () => {
  let component: EditarHologramasComponent;
  let fixture: ComponentFixture<EditarHologramasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarHologramasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarHologramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
