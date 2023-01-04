import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalContainerComponent } from './global-container.component';

describe('GlobalContainerComponent', () => {
  let component: GlobalContainerComponent;
  let fixture: ComponentFixture<GlobalContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
