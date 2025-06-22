import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteScreenComponent } from './favorite-screen.component';

describe('FavoriteScreenComponent', () => {
  let component: FavoriteScreenComponent;
  let fixture: ComponentFixture<FavoriteScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteScreenComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FavoriteScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
