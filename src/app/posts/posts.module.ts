import { NgModule } from "@angular/core";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { AddPostComponent } from "./add-post/add-post.component";
import { PostDirectiveDirective } from "../post-directive.directive";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
    {
        path: '',
        component: PostsListComponent,
        children: [
            {path: 'add', component: AddPostComponent},
            {
                path: 'edit/:id',
                component: EditPostComponent,
            }
        ]
    },
]

@NgModule({
    declarations: [
        PostsListComponent,
        AddPostComponent,
        PostDirectiveDirective,
        EditPostComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forChild(routes),
    ]
    
})

export class PostsModule {  
}