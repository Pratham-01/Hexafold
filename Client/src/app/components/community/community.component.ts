import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CommunityService } from 'src/app/services/community.service';
import { AddCommunityPostPopupComponent } from '../popups/add-community-post-popup/add-community-post-popup.component';
import { ToastComponent } from '../toast/toast.component';
@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {

  isToast:boolean = false;
  isToast1:boolean = false;
  isToast2:boolean = false;
  postsData:any;
  announcements:any;
  communityPosts:any;

  // announcements:Array<any> = [
    // {title:"1st announcement", message:"This is the first message", date:new Date(),"id": 1, isShow:true},
    // {title:"2nd announcement", message:"This is the second message", date:new Date(), "id": 2,isShow:true},
    // {title:"3rd announcement", message:"This is the third message", date:new Date(), "id": 3, isShow:true},
    // {title:"1st announcement", message:"This is the first message", date:new Date(),"id": 1, isShow:true},
    // {title:"2nd announcement", message:"This is the second message", date:new Date(), "id": 2,isShow:true},
    // {title:"3rd announcement", message:"This is the third message", date:new Date(), "id": 3, isShow:true},
    // {title:"1st announcement", message:"This is the first message", date:new Date(),"id": 1, isShow:true},
    // {title:"2nd announcement", message:"This is the second message", date:new Date(), "id": 2,isShow:true},
    // {title:"3rd announcement", message:"This is the third message", date:new Date(), "id": 3, isShow:true},
  // ]
  // get toasts(){
  //   return this.announcements.filter(f => f.isShow);
  // }


  constructor(
    private router: Router, 
    private authService: AuthenticationService,
    private communityService : CommunityService,
    private dialog: MatDialog
  ) {
    // Function to throw unsigned user out
    this.authService.currentUser$.subscribe((user:any) => {
      if(user){
        // console.log(user);
      }else{
        this.router.navigate(["home"]);
        this.authService.navigationSubject.next("home");
      }
    })
  }
  
  ngOnInit(): void {

    this.getPosts();

  }

  getPosts(){
    this.communityService.getCommunityPosts().subscribe((response:any) => {
      if(response){
        console.log(response);
        this.postsData = response;
        this.announcements = []; this.communityPosts = [];
        this.postsData.forEach((post:any) => {
            if(post["post_type"] == "announcement") this.announcements.push(post);
            else if(post["post_type"] == "community") this.communityPosts.push(post);
        });
      }
    }, (error:any)=>{
      console.log("Error : ", error);
    })
  }

  onCreatePost(type:any){
    let dialogRef = this.dialog.open(AddCommunityPostPopupComponent, {
      // height: '60%',
      width: '50%',
      panelClass: "scrollable",
      data: {post_type: type}
    });

    dialogRef.afterClosed().subscribe((response:any) => {
      if(response == "success") this.getPosts();
      
    });
  }

}