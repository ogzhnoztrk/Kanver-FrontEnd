import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodPointsComponent } from './blood-points.component';

describe('BloodPointsComponent', () => {
  let component: BloodPointsComponent;
  let fixture: ComponentFixture<BloodPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodPointsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
