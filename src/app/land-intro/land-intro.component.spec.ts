import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandIntroComponent } from './land-intro.component';

describe('LandIntroComponent', () => {
  let component: LandIntroComponent;
  let fixture: ComponentFixture<LandIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
