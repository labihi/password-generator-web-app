import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordLengthSliderComponent } from './password-length-slider.component';

describe('PasswordLengthSliderComponent', () => {
  let component: PasswordLengthSliderComponent;
  let fixture: ComponentFixture<PasswordLengthSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordLengthSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordLengthSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
