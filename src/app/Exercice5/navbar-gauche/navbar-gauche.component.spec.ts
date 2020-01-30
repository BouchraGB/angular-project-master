import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarGaucheComponent } from './navbar-gauche.component';

describe('NavbarGaucheComponent', () => {
  let component: NavbarGaucheComponent;
  let fixture: ComponentFixture<NavbarGaucheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarGaucheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarGaucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
