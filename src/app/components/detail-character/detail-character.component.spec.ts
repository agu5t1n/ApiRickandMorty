import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCharacterComponent } from './detail-character.component';

describe('DetallePersonajeComponent', () => {
  let component: DetailCharacterComponent;
  let fixture: ComponentFixture<DetailCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCharacterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
