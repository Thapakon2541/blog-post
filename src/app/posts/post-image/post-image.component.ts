
import { Component,
    Output,
    EventEmitter,
    ViewChild,
    Renderer2,
    Input,
    OnChanges,
    SimpleChanges
   } from '@angular/core';


@Component({
  selector: 'app-post-image',
  templateUrl: './post-image.component.html',
  styleUrls: ['./post-image.component.scss']
})
export class PostImageComponent  {
  @Input() image!: string;
  @Output() imageChange = new EventEmitter();
 
  @ViewChild('uploader') fileInput:any
  //@ViewChild('preview') thumbnail:any

  constructor( private renderer:Renderer2){
   
  }

  triggerFileUpload(){
      this.renderer.selectRootElement(
        this.fileInput.nativeElement
    
      )
  }
  ngOnChanges(changes:SimpleChanges){
    if( !changes['image'].currentValue){
      this.image = '/assets/images/no-img.jpg'
    }
  }

  urls = []
  uploadImage(event:any){
 
      const reader = new FileReader();
      const image  = event.target.files[0]
      
       reader.onload = ()=>{
         const result = reader.result;
        //  this.urls.push(event.target.result)
         
         this.imageChange.emit(result);

       }
       reader.readAsDataURL(image)
    }  
  
  

}
