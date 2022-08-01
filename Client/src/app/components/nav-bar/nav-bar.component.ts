import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
 
  user$ = this.authService.currentUser$;
  navbarBoolean:any = false;
  user_name:any = "Pushpit Jain"
  activeTab:any = "home";
  tabs = ["dashboard", "chat", "community", "training", "rewards"]

  constructor(
    private router: Router, public authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    // this.navbarBoolean = (window.location.href.split("/").pop() == "home" || window.location.href.split("/").pop() == "login") ;
    this.showTab(window.location.href)
  }

  showTab(locn:any){
    let currTab:any = "";
    for(let i=0; i<this.tabs.length; i++){
      let j = locn.indexOf(this.tabs[i]);
      if (j>-1){
        currTab = this.tabs[i]; break;
      }else currTab="dashboard";
    }
    switch(currTab){
      case "dashboard": this.activeTab = "home"; break;
      case currTab: this.activeTab = currTab; break;
      default: this.activeTab = "home"; break;
    }
  }

  changeTab(tab:any){
    this.activeTab = tab;
    // this.navbarBoolean = (window.location.href.split("/").pop() == "home" || window.location.href.split("/").pop() == "login") ;
  }

  logout(){
    this.authService.logout().subscribe(()=>{
      this.router.navigate(["home/"]);
    })
    
    // this.navbarBoolean = false;
  }

}
