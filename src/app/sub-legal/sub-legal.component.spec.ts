import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubLegalComponent } from './sub-legal.component';

describe('SubLegalComponent', () => {
  let component: SubLegalComponent;
  let fixture: ComponentFixture<SubLegalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubLegalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
