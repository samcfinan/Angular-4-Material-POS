import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineItemModalComponent } from './line-item-modal.component';

describe('LineItemModalComponent', () => {
  let component: LineItemModalComponent;
  let fixture: ComponentFixture<LineItemModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineItemModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
