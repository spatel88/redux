import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/store/app.state';
import { addPost } from '../state/posts.actions';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  postForm!: FormGroup;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null,[Validators.required,
         Validators.minLength(6)]),
      description: new FormControl(null,[Validators.required,
         Validators.minLength(6)]),  
    })
  }

  showDescriptionError() {
    const description = this.postForm.controls['description'];

    if(description.touched && !description.valid) {
      if(description.errors?.['required']) {
        return 'Description is required';
      } 
      if (description.errors?.['minlength']) {
        return 'min length is required';
      }
    }
    return null;
  }

  onAddPost(){
      if (!this.postForm.valid) {
        return;
      }
      const post: Post = {
        title: this.postForm.value.title,
        description: this.postForm.value.description,
      };

      //take this value and add to the post table
      this.store.dispatch(addPost({ post }));

  }

}
