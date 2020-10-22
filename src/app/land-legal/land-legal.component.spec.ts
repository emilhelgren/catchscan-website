import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandLegalComponent } from './land-legal.component';

describe('LandLegalComponent', () => {
  let component: LandLegalComponent;
  let fixture: ComponentFixture<LandLegalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandLegalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
