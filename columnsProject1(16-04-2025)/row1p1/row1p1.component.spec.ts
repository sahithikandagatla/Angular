import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Row1p1Component } from './row1p1.component';

describe('Row1p1Component', () => {
  let component: Row1p1Component;
  let fixture: ComponentFixture<Row1p1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Row1p1Component]
    });
    fixture = TestBed.createComponent(Row1p1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
