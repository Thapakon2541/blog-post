import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostFormComponent } from './posts/post-form/post-form.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostComponent } from './posts/post/post.component';
import { PostImageComponent } from './posts/post-image/post-image.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostFormComponent,
    PostListComponent,
    PostComponent,
    PostImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
