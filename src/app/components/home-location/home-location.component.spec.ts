import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLocationComponent } from './home-location.component';

describe('HomeLocationComponent', () => {
  let component: HomeLocationComponent;
  let fixture: ComponentFixture<HomeLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
