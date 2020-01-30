import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataVideoComponent } from './data-video.component';

describe('DataVideoComponent', () => {
  let component: DataVideoComponent;
  let fixture: ComponentFixture<DataVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
