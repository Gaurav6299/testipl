import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ipl2024Component } from './ipl2024.component';

describe('Ipl2024Component', () => {
  let component: Ipl2024Component;
  let fixture: ComponentFixture<Ipl2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ipl2024Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ipl2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
