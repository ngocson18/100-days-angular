import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day010ViewchildViewchildrenComponent } from './day010-viewchild-viewchildren.component';

describe('Day010ViewchildViewchildrenComponent', () => {
  let component: Day010ViewchildViewchildrenComponent;
  let fixture: ComponentFixture<Day010ViewchildViewchildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day010ViewchildViewchildrenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day010ViewchildViewchildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
