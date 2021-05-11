import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecherchAZComponent } from './recherch-az.component';

describe('RecherchAZComponent', () => {
  let component: RecherchAZComponent;
  let fixture: ComponentFixture<RecherchAZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecherchAZComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecherchAZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
