import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtsorderComponent } from './btsorder.component';

describe('BtsorderComponent', () => {
  let component: BtsorderComponent;
  let fixture: ComponentFixture<BtsorderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtsorderComponent]
    });
    fixture = TestBed.createComponent(BtsorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
