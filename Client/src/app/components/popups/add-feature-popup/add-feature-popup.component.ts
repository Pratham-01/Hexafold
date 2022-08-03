import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { response } from 'express';
import { UserClientService } from 'src/app/services/user-client.service';

@Component({
  selector: 'app-add-feature-popup',
  templateUrl: './add-feature-popup.component.html',
  styleUrls: ['./add-feature-popup.component.scss']
})
export class AddFeaturePopupComponent implements OnInit {

  newFeatureForm:any;

  constructor(
    private dialogRef: DialogRef,
    @Inject(MAT_DIALOG_DATA) public projectData: any,
    private userClientService:UserClientService

  ) { }

  ngOnInit(): void {
    this.newFeatureForm = {
      projectId : this.projectData["_id"],
      featureTitle : "",
      accepted : "No",
      cost : 0,
      status : "TODO",
      start_date : new Date().toISOString().split("T")[0],
      deadline : 0,
    }
  }

  onClosePopup(){
    this.dialogRef.close();
  }

  addFeature(){
    console.log(this.newFeatureForm);
    this.userClientService.addFeature(this.newFeatureForm).subscribe((response:any) => {
      if(response){
        console.log("Feature added : ", response);
        
      }
    })
    this.onClosePopup();
  }

}
