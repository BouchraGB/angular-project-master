import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MontreDigitaleComponent } from './montre-digitale.component';

describe('MontreDigitaleComponent', () => {
  let component: MontreDigitaleComponent;
  let fixture: ComponentFixture<MontreDigitaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MontreDigitaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MontreDigitaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
