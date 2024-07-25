import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomomodalComponent } from './fomomodal.component';

describe('FomomodalComponent', () => {
  let component: FomomodalComponent;
  let fixture: ComponentFixture<FomomodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FomomodalComponent]
    });
    fixture = TestBed.createComponent(FomomodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
