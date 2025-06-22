import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicCommentsComponent } from './public-comments.component';

describe('PublicCommentsComponent', () => {
  let component: PublicCommentsComponent;
  let fixture: ComponentFixture<PublicCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicCommentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
