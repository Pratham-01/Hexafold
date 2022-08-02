import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-feature-popup',
  templateUrl: './add-feature-popup.component.html',
  styleUrls: ['./add-feature-popup.component.scss']
})
export class AddFeaturePopupComponent implements OnInit {

  newFeatureForm:any;

  constructor(
    private dialogRef: DialogRef
  ) { }

  ngOnInit(): void {
    this.newFeatureForm = {
      title : "",
      description : "",
      accepted : false,
      status : "pending",
      tasks : [],
      cost : 0
      // missing : start_date
    }
  }

  onClosePopup(){
    this.dialogRef.close();
  }

  addFeature(){
    console.log(this.newFeatureForm);
    this.onClosePopup();
  }

}
