import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentHouseComponent } from './rent-house.component';

describe('RentHouseComponent', () => {
  let component: RentHouseComponent;
  let fixture: ComponentFixture<RentHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentHouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
