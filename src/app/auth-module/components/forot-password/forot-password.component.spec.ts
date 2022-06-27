import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForotPasswordComponent } from './forot-password.component';

describe('ForotPasswordComponent', () => {
  let component: ForotPasswordComponent;
  let fixture: ComponentFixture<ForotPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForotPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
