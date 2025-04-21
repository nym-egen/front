import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomchOpdPrescriptionComponent } from './somch-opd-prescription.component';

describe('SomchOpdPrescriptionComponent', () => {
  let component: SomchOpdPrescriptionComponent;
  let fixture: ComponentFixture<SomchOpdPrescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomchOpdPrescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomchOpdPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
