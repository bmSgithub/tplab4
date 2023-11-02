import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuscleGroupPageComponent } from './muscle-group-page.component';

describe('MuscleGroupPageComponent', () => {
  let component: MuscleGroupPageComponent;
  let fixture: ComponentFixture<MuscleGroupPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MuscleGroupPageComponent]
    });
    fixture = TestBed.createComponent(MuscleGroupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
