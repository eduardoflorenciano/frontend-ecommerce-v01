import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Marcasdatails } from './marcasdatails';

describe('Marcasdatails', () => {
  let component: Marcasdatails;
  let fixture: ComponentFixture<Marcasdatails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Marcasdatails],
    }).compileComponents();

    fixture = TestBed.createComponent(Marcasdatails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
