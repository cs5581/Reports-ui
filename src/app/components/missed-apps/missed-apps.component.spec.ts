import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissedAppsComponent } from './missed-apps.component';

describe('MissedAppsComponent', () => {
  let component: MissedAppsComponent;
  let fixture: ComponentFixture<MissedAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissedAppsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissedAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
