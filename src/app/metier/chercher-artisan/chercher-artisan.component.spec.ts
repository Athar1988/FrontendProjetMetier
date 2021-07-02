import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChercherArtisanComponent } from './chercher-artisan.component';

describe('ChercherArtisanComponent', () => {
  let component: ChercherArtisanComponent;
  let fixture: ComponentFixture<ChercherArtisanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChercherArtisanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChercherArtisanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
