import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomGenerateButtonComponent } from './custom-generate-button.component';

describe('CustomGenerateButtonComponent', () => {
  let component: CustomGenerateButtonComponent;
  let fixture: ComponentFixture<CustomGenerateButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomGenerateButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomGenerateButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
