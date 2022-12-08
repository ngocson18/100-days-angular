import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day008ComponentInteractionComponent } from './day008-component-interaction.component';

describe('Day008ComponentInteractionComponent', () => {
  let component: Day008ComponentInteractionComponent;
  let fixture: ComponentFixture<Day008ComponentInteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day008ComponentInteractionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day008ComponentInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
