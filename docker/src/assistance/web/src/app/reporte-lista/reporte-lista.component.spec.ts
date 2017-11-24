import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteListaComponent } from './reporte-lista.component';

describe('ReporteListaComponent', () => {
  let component: ReporteListaComponent;
  let fixture: ComponentFixture<ReporteListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
