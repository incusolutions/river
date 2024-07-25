import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DepartmentsComponent } from './departments/departments.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ArticleComponent } from './article/article.component';



const routes: Routes = [

  {
    path:'home', 
    component: HomeComponent
  },

  {
    path:'about', 
    component: AboutComponent
  },

  {
    path:'departments', 
    component: DepartmentsComponent
  },


  {
    path:'blog', 
    component: BlogComponent
  },

  {
    path:'blog/:art', 
    component: ArticleComponent
  },

  {
    path:'contact', 
    component: ContactComponent
  },

  

  {
    path:'',
    redirectTo:'/home',
    pathMatch: 'full'
  }

  
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
