import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoHorasTrabajoComponent } from './calculo-horas-trabajo.component';

describe('CalculoHorasTrabajoComponent', () => {
  let component: CalculoHorasTrabajoComponent;
  let fixture: ComponentFixture<CalculoHorasTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculoHorasTrabajoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculoHorasTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
