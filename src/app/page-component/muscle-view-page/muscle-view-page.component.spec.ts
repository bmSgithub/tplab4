import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuscleViewComponent } from './muscle-view-page.component';

describe('MuscleViewPageComponent', () => {
  let component: MuscleViewComponent;
  let fixture: ComponentFixture<MuscleViewComponent>;

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
