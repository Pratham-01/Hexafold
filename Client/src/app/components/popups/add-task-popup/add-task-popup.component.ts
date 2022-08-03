import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-task-popup',
  templateUrl: './add-task-popup.component.html',
  styleUrls: ['./add-task-popup.component.scss']
})
export class AddTaskPopupComponent implements OnInit {

  constructor(
    private dialogRef: DialogRef,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  taskForm:any;
  priorityOptions:any = ["Low", "Medium", "High"]

  ngOnInit(): void {
    this.taskForm = {
      projectId : this.data.projectId,
      featureTitle : this.data.featureTitle,

      priority: "Low",
			taskTitle: "",
			description: "",
			startDateTime: new Date(),
			deadline: "",    // pending
			asignee: "",    // pending
			status: "TODO",
			assignedEmployee: "",
			rewardsPoints: 0,
    }
  }

  onClosePopup(){
    this.dialogRef.close();
  }

  addtask(){
    console.log(this.taskForm);

    this.onClosePopup();
    
  }

}
