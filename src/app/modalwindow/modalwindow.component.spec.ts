import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalwindowComponent } from './modalwindow.component';

describe('ModalwindowComponent', () => {
  let component: ModalwindowComponent;
  let fixture: ComponentFixture<ModalwindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalwindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalwindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
