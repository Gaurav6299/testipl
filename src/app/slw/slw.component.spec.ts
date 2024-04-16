import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlwComponent } from './slw.component';

describe('SlwComponent', () => {
  let component: SlwComponent;
  let fixture: ComponentFixture<SlwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlwComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
