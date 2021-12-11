import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueAgingComponent } from './revenue-aging.component';

describe('RevenueAgingComponent', () => {
  let component: RevenueAgingComponent;
  let fixture: ComponentFixture<RevenueAgingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenueAgingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueAgingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
