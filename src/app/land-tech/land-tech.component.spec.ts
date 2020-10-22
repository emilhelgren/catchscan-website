import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandTechComponent } from './land-tech.component';

describe('LandTechComponent', () => {
  let component: LandTechComponent;
  let fixture: ComponentFixture<LandTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
