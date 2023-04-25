import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetunComponent } from './planetun.component';

describe('PlanetunComponent', () => {
  let component: PlanetunComponent;
  let fixture: ComponentFixture<PlanetunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
