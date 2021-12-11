import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayerBasedComponent } from './payer-based.component';

describe('PayerBasedComponent', () => {
  let component: PayerBasedComponent;
  let fixture: ComponentFixture<PayerBasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayerBasedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayerBasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
