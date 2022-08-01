import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
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
  _toasts:Array<any> = [
    {title:"1st announcement", message:"This is the first message", date:new Date(),"id": 1, isShow:true},
    {title:"2nd announcement", message:"This is the second message", date:new Date(), "id": 2,isShow:true},
    {title:"3rd announcement", message:"This is the third message", date:new Date(), "id": 3, isShow:true},
    {title:"1st announcement", message:"This is the first message", date:new Date(),"id": 1, isShow:true},
    {title:"2nd announcement", message:"This is the second message", date:new Date(), "id": 2,isShow:true},
    {title:"3rd announcement", message:"This is the third message", date:new Date(), "id": 3, isShow:true},
    {title:"1st announcement", message:"This is the first message", date:new Date(),"id": 1, isShow:true},
    {title:"2nd announcement", message:"This is the second message", date:new Date(), "id": 2,isShow:true},
    {title:"3rd announcement", message:"This is the third message", date:new Date(), "id": 3, isShow:true},
  ]
  get toasts(){
    return this._toasts.filter(f => f.isShow);
  }


  constructor(
    private router: Router, 
    private authService: AuthenticationService
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
  }

}
