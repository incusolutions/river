import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { SliderhomeComponent } from './sliderhome/sliderhome.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { DepartmentsComponent } from './departments/departments.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ArticleComponent } from './article/article.component';
import { ArticlePlatainsComponent } from './article-platains/article-platains.component';
import { ArticlePicoGalloComponent } from './article-pico-gallo/article-pico-gallo.component';
import { ArticlePinacoladaComponent } from './article-pinacolada/article-pinacolada.component';
import { ArticleAvocadoComponent } from './article-avocado/article-avocado.component';
import { ArticleArepaComponent } from './article-arepa/article-arepa.component';
import { SharemodalComponent } from './sharemodal/sharemodal.component';
import { FomomodalComponent } from './fomomodal/fomomodal.component';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuarticlesComponent } from './menuarticles/menuarticles.component';
import { BtsorderComponent } from './btsorder/btsorder.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SliderhomeComponent,
    FooterComponent,
    AboutComponent,
    DepartmentsComponent,
    BlogComponent,
    ContactComponent,
    ArticleComponent,
    ArticlePlatainsComponent,
    ArticlePicoGalloComponent,
    ArticlePinacoladaComponent,
    ArticleAvocadoComponent,
    ArticleArepaComponent,
    SharemodalComponent,
    FomomodalComponent,
    MenuarticlesComponent,
    BtsorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
