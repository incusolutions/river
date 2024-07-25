import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleArepaComponent } from './article-arepa.component';

describe('ArticleArepaComponent', () => {
  let component: ArticleArepaComponent;
  let fixture: ComponentFixture<ArticleArepaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleArepaComponent]
    });
    fixture = TestBed.createComponent(ArticleArepaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
