import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carrosdatails } from './carrosdatails';

describe('Carrosdatails', () => {
  let component: Carrosdatails;
  let fixture: ComponentFixture<Carrosdatails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carrosdatails],
    }).compileComponents();

    fixture = TestBed.createComponent(Carrosdatails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
