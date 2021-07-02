import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionMetierComponent } from './description-metier.component';

describe('DescriptionMetierComponent', () => {
  let component: DescriptionMetierComponent;
  let fixture: ComponentFixture<DescriptionMetierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionMetierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionMetierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
