/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BetaSignupComponent } from './beta-signup.component';

describe('BetaSignupComponent', () => {
  let component: BetaSignupComponent;
  let fixture: ComponentFixture<BetaSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetaSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetaSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
