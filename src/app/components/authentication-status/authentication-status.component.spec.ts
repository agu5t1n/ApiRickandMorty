import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationStatusComponent } from './authentication-status.component';

describe('AuthenticationStatusComponent', () => {
  let component: AuthenticationStatusComponent;
  let fixture: ComponentFixture<AuthenticationStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticationStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
