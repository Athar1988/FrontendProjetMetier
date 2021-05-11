import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMetierComponent } from './liste-metier.component';

describe('ListeMetierComponent', () => {
  let component: ListeMetierComponent;
  let fixture: ComponentFixture<ListeMetierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeMetierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeMetierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
