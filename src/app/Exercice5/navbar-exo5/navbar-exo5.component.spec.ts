import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarExo5Component } from './navbar-exo5.component';

describe('NavbarExo5Component', () => {
  let component: NavbarExo5Component;
  let fixture: ComponentFixture<NavbarExo5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarExo5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarExo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
