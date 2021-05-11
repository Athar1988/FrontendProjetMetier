import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TousUserComponent } from './tous-user.component';

describe('TousUserComponent', () => {
  let component: TousUserComponent;
  let fixture: ComponentFixture<TousUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TousUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TousUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
