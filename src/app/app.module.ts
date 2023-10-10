import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { appReducer } from './store/app.state';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { PostDirectiveDirective } from './post-directive.directive';
import { EditPostComponent } from './posts/edit-post/edit-post.component';
@NgModule({
  declarations: [
    AppComponent,    
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer),
    // StoreDevtoolsModule.instrument({
    //   logOnly: environment.production,
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
