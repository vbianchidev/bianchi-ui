import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiLogo } from './bui-logo';

describe('BuiLogo', () => {
  let component: BuiLogo;
  let fixture: ComponentFixture<BuiLogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuiLogo],
    }).compileComponents();

    fixture = TestBed.createComponent(BuiLogo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
