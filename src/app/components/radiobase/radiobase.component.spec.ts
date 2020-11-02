import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiobaseComponent } from './radiobase.component';

describe('RadiobaseComponent', () => {
  let component: RadiobaseComponent;
  let fixture: ComponentFixture<RadiobaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadiobaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiobaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
