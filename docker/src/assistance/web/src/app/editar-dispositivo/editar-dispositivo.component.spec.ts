import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDispositivoComponent } from './editar-dispositivo.component';

describe('EditarDispositivoComponent', () => {
  let component: EditarDispositivoComponent;
  let fixture: ComponentFixture<EditarDispositivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarDispositivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarDispositivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
