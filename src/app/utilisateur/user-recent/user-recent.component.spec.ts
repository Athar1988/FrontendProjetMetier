import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRecentComponent } from './user-recent.component';

describe('UserRecentComponent', () => {
  let component: UserRecentComponent;
  let fixture: ComponentFixture<UserRecentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRecentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
