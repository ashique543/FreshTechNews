import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './MyComponents/about/about.component';
import { NewsComponent } from './MyComponents/news/news.component';

const routes: Routes = [
  {path : 'about', component : AboutComponent},
  {path : 'news', component : NewsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
