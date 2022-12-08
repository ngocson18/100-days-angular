import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day004Component } from './day004.component';

describe('Day004Component', () => {
  let component: Day004Component;
  let fixture: ComponentFixture<Day004Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day004Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
