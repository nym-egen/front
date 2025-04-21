import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdAppointmentReportComponent } from './opd-appointment-report.component';

describe('OpdAppointmentReportComponent', () => {
  let component: OpdAppointmentReportComponent;
  let fixture: ComponentFixture<OpdAppointmentReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpdAppointmentReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpdAppointmentReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
