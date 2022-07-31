import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-feature-cost-popup',
  templateUrl: './feature-cost-popup.component.html',
  styleUrls: ['./feature-cost-popup.component.scss']
})
export class FeatureCostPopupComponent implements OnInit {


  constructor(
    @Inject(MAT_DIALOG_DATA) public feature: any
  ) { }

  ngOnInit(): void {
    this.feature = this.feature.feature;
    
  }

}
