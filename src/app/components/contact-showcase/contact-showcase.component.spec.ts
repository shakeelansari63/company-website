import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactShowcaseComponent } from './contact-showcase.component';

describe('ContactShowcaseComponent', () => {
  let component: ContactShowcaseComponent;
  let fixture: ComponentFixture<ContactShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactShowcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
