import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripSummaryComponent } from './trip-summary.component';

describe('TripSummaryComponent', () => {
  let component: TripSummaryComponent;
  let fixture: ComponentFixture<TripSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
