import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MontreAnalogiqueComponent } from './montre-analogique.component';

describe('MontreAnalogiqueComponent', () => {
  let component: MontreAnalogiqueComponent;
  let fixture: ComponentFixture<MontreAnalogiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MontreAnalogiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MontreAnalogiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
