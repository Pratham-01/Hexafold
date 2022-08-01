import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
