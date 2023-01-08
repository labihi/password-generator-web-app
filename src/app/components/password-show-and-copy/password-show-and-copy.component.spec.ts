import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordShowAndCopyComponent } from './password-show-and-copy.component';

describe('PasswordShowAndCopyComponent', () => {
  let component: PasswordShowAndCopyComponent;
  let fixture: ComponentFixture<PasswordShowAndCopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordShowAndCopyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordShowAndCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
