import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserReactDrivenComponent } from './add-user-react-driven.component';

describe('AddUserReactDrivenComponent', () => {
  let component: AddUserReactDrivenComponent;
  let fixture: ComponentFixture<AddUserReactDrivenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUserReactDrivenComponent]
    });
    fixture = TestBed.createComponent(AddUserReactDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
