import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableNodeComponent } from './table-node.component';

describe('TableNodeComponent', () => {
  let component: TableNodeComponent;
  let fixture: ComponentFixture<TableNodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableNodeComponent]
    });
    fixture = TestBed.createComponent(TableNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
