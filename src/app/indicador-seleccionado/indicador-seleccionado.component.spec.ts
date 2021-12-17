import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicadorSeleccionadoComponent } from './indicador-seleccionado.component';

describe('IndicadorSeleccionadoComponent', () => {
  let component: IndicadorSeleccionadoComponent;
  let fixture: ComponentFixture<IndicadorSeleccionadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicadorSeleccionadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicadorSeleccionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
