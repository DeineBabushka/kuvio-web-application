import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicFavoritesComponent } from './public-favorites.component';

describe('PublicFavoritesComponent', () => {
  let component: PublicFavoritesComponent;
  let fixture: ComponentFixture<PublicFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicFavoritesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
