import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaMovieComponent } from './cinema-movie.component';

describe('CinemaMovieComponent', () => {
  let component: CinemaMovieComponent;
  let fixture: ComponentFixture<CinemaMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinemaMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
