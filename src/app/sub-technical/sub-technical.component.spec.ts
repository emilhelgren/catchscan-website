import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTechnicalComponent } from './sub-technical.component';

describe('SubTechnicalComponent', () => {
  let component: SubTechnicalComponent;
  let fixture: ComponentFixture<SubTechnicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubTechnicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTechnicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
