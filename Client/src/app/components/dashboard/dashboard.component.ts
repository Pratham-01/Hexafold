import { Component, OnInit } from '@angular/core';
import { user } from '@angular/fire/auth';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { GeneralService } from 'src/app/services/general.service';
import { ShowcaseService } from 'src/app/services/showcase.service';
import { UserClientService } from 'src/app/services/user-client.service';
import { AddShowcasePostPopupComponent } from '../popups/add-showcase-post-popup/add-showcase-post-popup.component';
import { CreateProjectPopupComponent } from '../popups/create-project-popup/create-project-popup.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  sessionData:any = {};

  
  projectList:any = [];
  showcasePostList:any = [
    {title:"Project 1", date_posted : new Date(),cover_img:"http://bit.ly/2tMBBTd", content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis \n  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in \n\n  culpa qui officia deserunt mollit anim id est laborum."},
    {title:"Project 2", date_posted : new Date(),cover_img:"http://bit.ly/2tMBBTd", content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis \n  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in \n\n  culpa qui officia deserunt mollit anim id est laborum."},
    {title:"Project 3", date_posted : new Date(),cover_img:"http://bit.ly/2tMBBTd", content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis \n  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in \n\n  culpa qui officia deserunt mollit anim id est laborum."},
    {title:"Project 4", date_posted : new Date(),cover_img:"http://bit.ly/2tMBBTd", content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis \n  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in \n\n  culpa qui officia deserunt mollit anim id est laborum."}
  ]
  // card_bg_colors = ['#B3F5FF', '#B3D4FF', '#C0B6F2']
  card_bg_colors = ['#221d1c', '#4b3842', '#9192a2', '#595565', '#343d3f']
  user$ = this.authService.currentUser$;
  userType:any;

  constructor(
    private router: Router, 
    private authService: AuthenticationService,
    private userClientService: UserClientService,
    private showcaseService: ShowcaseService,
    private dialog: MatDialog,
    private generalService: GeneralService,

  ) {

    // Function to throw unsigned user out
    this.user$.subscribe((user:any) => {
      if(user){
        // console.log(user);
      }else{
        this.router.navigate(["home"]);
        this.authService.navigationSubject.next("home");
      }
    })
  }

  ngOnInit(): void {
    this.userType = this.userClientService.getLoggedInUserType();
    if (this.userType == "client"){
      this.getClientData(sessionStorage.getItem("email"));
    }else if (this.userType == "user"){
      this.getUserData(sessionStorage.getItem("email"));
    }
  }

  getSessionData(){
    this.sessionData = {
      companyId : sessionStorage.getItem("companyId"),
      email : sessionStorage.getItem("email"),
      type : sessionStorage.getItem("type"),
      user_type : sessionStorage.getItem("user_type"),
    }
    this.generalService.IAMSubject.next();
  }

  // INTERACTIONS

  onNavigateToSignUp(type:any){
    this.router.navigate(["sign-up", type])
  }

  getCardBorder(){
    return "1.5rem solid #221d1c"
    // return "1.5rem solid "+ this.card_bg_colors[Math.floor(Math.random()*this.card_bg_colors.length)]
  }

  goToProject(project_id:any){
    this.router.navigate(["projects/", project_id])
  }
  openCreateNewProjectPopup(){
    let dialogRef = this.dialog.open(CreateProjectPopupComponent, {
      height: '60%',
      width: '50%',
      panelClass: "scrollable"
    });
  }

  openCreateNewShowcasePostPopup(){
    let dialogRef = this.dialog.open(AddShowcasePostPopupComponent, {
      height: '75%',
      width: '50%',
      panelClass: "scrollable"
    });
  }
  
  

  // GET DATA CALLS

  getUserData(email:any){
    this.userClientService.getUserData(email).subscribe((response:any) => {
      if(response){
        console.log("User data: ", response);
        this.getUserProjects(response[0]["email"]);
        sessionStorage.setItem("companyId", response[0]["company_id"]);
        sessionStorage.setItem("user_type", response[0]["user_type"]);
        this.getSessionData()
        this.getShowcasePosts();
      }
    }, (error:any)=>{
      console.log("Error : ", error);
    })
  }
  getClientData(email:any){
    this.userClientService.getClientData(email).subscribe((response:any) => {
      if(response){
        console.log("Client data: ", response);
        this.getClientProjects(response[0]["email"]);
        sessionStorage.setItem("companyId", response[0]["company_id"]);
        sessionStorage.removeItem("user_type");
        this.getSessionData()
        this.getShowcasePosts();
      }
    }, (error:any)=>{
      console.log("Error : ", error);
    })
  }

  getUserProjects(userId:any){
    this.userClientService.getUserProjects(userId).subscribe((response:any) => {
      if(response){
        console.log("User projects: ", response);
        this.projectList = response;
        this.projectList.forEach((p:any) => {
          p.total_cost = 0;
          p.features.forEach((f:any) => {
            p.total_cost += f.cost;
          });
        })
      }
    }, (error:any)=>{
      console.log("Error : ", error);
    })
  }
  getClientProjects(clientId:any){
    this.userClientService.getClientProjects(clientId).subscribe((response:any) => {
      if(response){
        console.log("Client projects: ", response);
        this.projectList = response;
        this.projectList.forEach((p:any) => {
          p.total_cost = 0;
          p.features.forEach((f:any) => {
            p.total_cost += f.cost;
          });
        })
        
      }
    }, (error:any)=>{
      console.log("Error : ", error);
    })
  }
  getShowcasePosts(){
    this.showcaseService.getShowcasePosts(sessionStorage.getItem("companyId")).subscribe((response:any) => {
      if(response){
        console.log(response);
      }
    }, (error:any)=>{
      console.log("Error : ", error);
    })

    this.showcasePostList.forEach((post:any) => {
      post.content = post.content.split("\n");
    });

  }

  // POST PATCH CALLS




}
