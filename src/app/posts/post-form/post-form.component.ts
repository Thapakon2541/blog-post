import { Component , Output,EventEmitter} from '@angular/core';
import {Post} from '../shared/post.model'
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})

export class PostFormComponent  {
  @Output() formSumit:EventEmitter<Post> = new EventEmitter();
    
    model!: Post; 
    constructor(){
      this.resetPost();
    }
    createPost(){      
      this.formSumit.emit(this.model)
     
      this.resetPost();
    }
    changeImage(image:any){
      this.model.image = image
     
    }
    private resetPost(){
      this.model = new Post();
    }

}
