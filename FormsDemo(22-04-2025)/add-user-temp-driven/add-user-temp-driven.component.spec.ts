import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserTempDrivenComponent } from './add-user-temp-driven.component';

describe('AddUserTempDrivenComponent', () => {
  let component: AddUserTempDrivenComponent;
  let fixture: ComponentFixture<AddUserTempDrivenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUserTempDrivenComponent]
    });
    fixture = TestBed.createComponent(AddUserTempDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
