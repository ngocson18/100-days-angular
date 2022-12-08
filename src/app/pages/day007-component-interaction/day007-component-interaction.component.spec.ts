import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day007ComponentInteractionComponent } from './day007-component-interaction.component';

describe('Day007ComponentInteractionComponent', () => {
  let component: Day007ComponentInteractionComponent;
  let fixture: ComponentFixture<Day007ComponentInteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day007ComponentInteractionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day007ComponentInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
