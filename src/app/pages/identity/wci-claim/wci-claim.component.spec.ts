import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WciClaimComponent } from './wci-claim.component';

describe('WciClaimComponent', () => {
  let component: WciClaimComponent;
  let fixture: ComponentFixture<WciClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WciClaimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WciClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
