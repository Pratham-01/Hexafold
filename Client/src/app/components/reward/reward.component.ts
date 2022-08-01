import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { BuyRewardPopupComponent } from '../popups/buy-reward-popup/buy-reward-popup.component';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.scss']
})
export class RewardComponent implements OnInit {

  items:any = [
    {title:"Product 1", description:"This is the first product", img:"http://bit.ly/2tMBBTd","id": 1,price:"20"},
    {title:"Product 2", description:"This is the 2nd product", img:"http://bit.ly/2tMBBTd","id": 1,price:"20"},
    {title:"Product 3", description:"This is the 3rd product", img:"http://bit.ly/2tMBBTd","id": 1,price:"20"},
    {title:"Product 4", description:"This is the 4th product", img:"http://bit.ly/2tMBBTd","id": 1,price:"20"},
    {title:"Product 5", description:"This is the 5th product", img:"http://bit.ly/2tMBBTd","id": 1,price:"20"},
    
  ]


  constructor(
    private router: Router,
    private authService : AuthenticationService,
    private dialog: MatDialog,

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

  openBuyRewardPopup(item:any){
    let dialogRef = this.dialog.open(BuyRewardPopupComponent, {
      height: '72%',
      width: '70%',
      data: {data:item}
    });
  }

}
