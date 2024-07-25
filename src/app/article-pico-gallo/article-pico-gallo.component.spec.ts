import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePicoGalloComponent } from './article-pico-gallo.component';

describe('ArticlePicoGalloComponent', () => {
  let component: ArticlePicoGalloComponent;
  let fixture: ComponentFixture<ArticlePicoGalloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticlePicoGalloComponent]
    });
    fixture = TestBed.createComponent(ArticlePicoGalloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
