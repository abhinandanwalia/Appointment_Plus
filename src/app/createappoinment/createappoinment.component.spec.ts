import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateappoinmentComponent } from './createappoinment.component';

describe('CreateappoinmentComponent', () => {
  let component: CreateappoinmentComponent;
  let fixture: ComponentFixture<CreateappoinmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateappoinmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateappoinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
