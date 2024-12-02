import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyInPictureComponent } from './baby-in-picture.component';

describe('BabyInPictureComponent', () => {
  let component: BabyInPictureComponent;
  let fixture: ComponentFixture<BabyInPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BabyInPictureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BabyInPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
