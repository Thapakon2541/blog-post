import { Component } from '@angular/core';
import {Post} from './shared/post.model'
import {View} from './shared/view.enum'
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent  {
  posts:Post[] = [];  // post มีรูปแบบเป็น Model
  View = View;
  currentView = View.SHOW_ALL
  createPost(post:Post){ // เมือมีการกดปุ่ม 'Create' จากหน้า form จะเรียกใช้งาน creatPost มาทำงาน  
    this.posts.push(post)
    this.changeCurrentView(View.SHOW_ALL)
  }

  changeCurrentView(view:any){
       this.currentView = view;
  }

}
