import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyinpitctureComponent } from './babyinpitcture.component';

describe('BabyinpitctureComponent', () => {
  let component: BabyinpitctureComponent;
  let fixture: ComponentFixture<BabyinpitctureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BabyinpitctureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BabyinpitctureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
