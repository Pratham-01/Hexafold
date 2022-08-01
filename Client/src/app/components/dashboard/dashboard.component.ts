import { Component, OnInit } from '@angular/core';
import { user } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  
  projectList:any = [
    {"title": "Project 1", "id": 1},
    {"title": "Project 2", "id": 2},
    {"title": "Project 3", "id": 3},
    {"title": "Project 4", "id": 4},
    {"title": "Project 5", "id": 5},
    {"title": "Project 6", "id": 6},
    {"title": "Project 7", "id": 7},
  ]
  // card_bg_colors = ['#B3F5FF', '#B3D4FF', '#C0B6F2']
  card_bg_colors = ['#221d1c', '#4b3842', '#9192a2', '#595565', '#343d3f']
  user$ = this.authService.currentUser$;

  constructor(
    private router: Router, 
    private authService: AuthenticationService
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
  }

  getCardBorder(){
    return "1.5rem solid "+ this.card_bg_colors[Math.floor(Math.random()*this.card_bg_colors.length)]
  }

  goToProject(project_id:any){
    this.router.navigate(["projects/", project_id])
  }

}
