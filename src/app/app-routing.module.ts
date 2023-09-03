import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter/counter.component';
import { HomeComponent } from './home/home.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { AddPostComponent } from './posts/add-post/add-post.component';

const routes: Routes = [
  {
    path:'counter',
    component: CounterComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path: 'posts',
    component: PostsListComponent,
    children: [{path: 'add', component: AddPostComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
