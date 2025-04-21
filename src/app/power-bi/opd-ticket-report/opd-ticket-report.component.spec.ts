import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdTicketReportComponent } from './opd-ticket-report.component';

describe('OpdTicketReportComponent', () => {
  let component: OpdTicketReportComponent;
  let fixture: ComponentFixture<OpdTicketReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpdTicketReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpdTicketReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
