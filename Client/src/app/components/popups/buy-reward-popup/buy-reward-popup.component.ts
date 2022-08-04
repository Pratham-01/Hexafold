import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-buy-reward-popup',
  templateUrl: './buy-reward-popup.component.html',
  styleUrls: ['./buy-reward-popup.component.scss']
})
export class BuyRewardPopupComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef : MatDialogRef<BuyRewardPopupComponent>
  ) { }

  ngOnInit(): void {
    this.data = this.data.data;
    console.log(this.data);
    
  }

  onClosePopup(){
    this.dialogRef.close();
  }

}
