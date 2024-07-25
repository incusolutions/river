import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePlatainsComponent } from './article-platains.component';

describe('ArticlePlatainsComponent', () => {
  let component: ArticlePlatainsComponent;
  let fixture: ComponentFixture<ArticlePlatainsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticlePlatainsComponent]
    });
    fixture = TestBed.createComponent(ArticlePlatainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
