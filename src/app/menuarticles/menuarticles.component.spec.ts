import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuarticlesComponent } from './menuarticles.component';

describe('MenuarticlesComponent', () => {
  let component: MenuarticlesComponent;
  let fixture: ComponentFixture<MenuarticlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuarticlesComponent]
    });
    fixture = TestBed.createComponent(MenuarticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
