import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavV1Component } from './nav-v1.component';

describe('NavV1Component', () => {
  let component: NavV1Component;
  let fixture: ComponentFixture<NavV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
