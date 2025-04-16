import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistorsListComponent } from './vistors-list.component';

describe('VistorsListComponent', () => {
  let component: VistorsListComponent;
  let fixture: ComponentFixture<VistorsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistorsListComponent]
    });
    fixture = TestBed.createComponent(VistorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
