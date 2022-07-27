import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  navbarBoolean:any = false;
  user_name:any = "Pushpit Jain"
  activeTab:any = "home";


  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.navbarBoolean = (window.location.href.split("/").pop() == "home" || window.location.href.split("/").pop() == "login") ;

  }

  changeTab(tab:any){
    this.activeTab = tab;
    // this.navbarBoolean = (window.location.href.split("/").pop() == "home" || window.location.href.split("/").pop() == "login") ;
  }

  logout(){
    this.router.navigate(["home/"]);
    // this.navbarBoolean = false;
  }

}
