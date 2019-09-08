import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxFieldDisplayComponent } from './checkbox-field-display.component';

describe('CheckboxFieldDisplayComponent', () => {
  let component: CheckboxFieldDisplayComponent;
  let fixture: ComponentFixture<CheckboxFieldDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxFieldDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxFieldDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
