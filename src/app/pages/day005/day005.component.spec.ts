import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day005Component } from './day005.component';

describe('Day005Component', () => {
  let component: Day005Component;
  let fixture: ComponentFixture<Day005Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day005Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
