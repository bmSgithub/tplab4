import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuscleViewPageComponent } from './muscle-view-page.component';

describe('MuscleViewPageComponent', () => {
  let component: MuscleViewPageComponent;
  let fixture: ComponentFixture<MuscleViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MuscleViewPageComponent]
    });
    fixture = TestBed.createComponent(MuscleViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
