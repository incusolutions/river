import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderhomeComponent } from './sliderhome.component';

describe('SliderhomeComponent', () => {
  let component: SliderhomeComponent;
  let fixture: ComponentFixture<SliderhomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderhomeComponent]
    });
    fixture = TestBed.createComponent(SliderhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
