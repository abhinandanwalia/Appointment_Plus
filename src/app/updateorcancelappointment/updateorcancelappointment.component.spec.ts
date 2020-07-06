import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateorcancelappointmentComponent } from './updateorcancelappointment.component';

describe('UpdateorcancelappointmentComponent', () => {
  let component: UpdateorcancelappointmentComponent;
  let fixture: ComponentFixture<UpdateorcancelappointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateorcancelappointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateorcancelappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
