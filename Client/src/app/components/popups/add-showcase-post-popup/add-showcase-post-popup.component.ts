import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { ShowcaseService } from 'src/app/services/showcase.service';

@Component({
  selector: 'app-add-showcase-post-popup',
  templateUrl: './add-showcase-post-popup.component.html',
  styleUrls: ['./add-showcase-post-popup.component.scss']
})
export class AddShowcasePostPopupComponent implements OnInit {

  constructor(
    private dialogRef: DialogRef,
    private showcaseService: ShowcaseService
  ) { }

  showcasePostForm:any;

  ngOnInit(): void {
    this.showcasePostForm = {
      title : "",
      content : "",
      date_posted : new Date(),
      cover_img : "",
      post_type: "showcase"
    }
  }

  onClosePopup(){
    this.dialogRef.close();
  }

  createShowcasePost(){
    console.log(this.showcasePostForm);

    this.showcaseService.addShowcasePost(this.showcasePostForm).subscribe((response:any) => {
      if(response){
        console.log(response);
        
      }
    })

    this.onClosePopup();
  }

}
