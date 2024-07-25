import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePinacoladaComponent } from './article-pinacolada.component';

describe('ArticlePinacoladaComponent', () => {
  let component: ArticlePinacoladaComponent;
  let fixture: ComponentFixture<ArticlePinacoladaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticlePinacoladaComponent]
    });
    fixture = TestBed.createComponent(ArticlePinacoladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
