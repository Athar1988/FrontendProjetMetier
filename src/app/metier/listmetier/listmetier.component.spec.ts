import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmetierComponent } from './listmetier.component';

describe('ListmetierComponent', () => {
  let component: ListmetierComponent;
  let fixture: ComponentFixture<ListmetierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListmetierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmetierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
