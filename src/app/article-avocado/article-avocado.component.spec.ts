import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleAvocadoComponent } from './article-avocado.component';

describe('ArticleAvocadoComponent', () => {
  let component: ArticleAvocadoComponent;
  let fixture: ComponentFixture<ArticleAvocadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticleAvocadoComponent]
    });
    fixture = TestBed.createComponent(ArticleAvocadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
