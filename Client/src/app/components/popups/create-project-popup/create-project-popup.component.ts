import { DialogRef } from '@angular/cdk/dialog';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-project-popup',
  templateUrl: './create-project-popup.component.html',
  styleUrls: ['./create-project-popup.component.scss']
})
export class CreateProjectPopupComponent implements OnInit {

  constructor(
    private dialogRef: DialogRef
  ) { }

  projectForm:any;
  ClientList:any = [{id:"c1", name:"c1"}, {id:"c2", name:"c2"},{id:"c3", name:"c3"},{id:"c4", name:"c4"},{id:"c1", name:"c1"}, {id:"c2", name:"c2"},{id:"c3", name:"c3"},{id:"c4", name:"c4"},{id:"c1", name:"c1"}, {id:"c2", name:"c2"},{id:"c3", name:"c3"},{id:"c4", name:"c4"},{id:"c1", name:"c1"}, {id:"c2", name:"c2"},{id:"c3", name:"c3"},{id:"c4", name:"c4"},];
  UserList:any = [{id:"u1", name:"u1"},{id:"u2", name:"u2"},{id:"u3", name:"u3"},{id:"u4", name:"u4"},{id:"u1", name:"u1"},{id:"u2", name:"u2"},{id:"u3", name:"u3"},{id:"u4", name:"u4"},{id:"u1", name:"u1"},{id:"u2", name:"u2"},{id:"u3", name:"u3"},{id:"u4", name:"u4"},{id:"u1", name:"u1"},{id:"u2", name:"u2"},{id:"u3", name:"u3"},{id:"u4", name:"u4"},];

  ngOnInit(): void {
    this.generateProjectForm();
  }

  generateProjectForm(){
    this.projectForm = {
      title : "",
      description : "",
      clients : [],
      comments : [],
      features : [],
      user : []
    }
    this.ClientList.forEach((cl:any) => {
      this.projectForm.clients.push({id: cl.id, assigned:false});
    });
    this.UserList.forEach((u:any) => {
      this.projectForm.user.push({id: u.id, assigned:false});
    });
  }

  onClosePopup(){
    this.dialogRef.close();
  }

  createProject(){
    let tmpClient:any = [];
    this.projectForm.clients.forEach((elem:any) => {
      if (elem.assigned) tmpClient.push(elem.id);
    });
    let tmpUser:any = [];
    this.projectForm.user.forEach((elem:any) => {
      if (elem.assigned) tmpUser.push(elem.id);
    });
    this.projectForm.clients = tmpClient;
    this.projectForm.user = tmpUser;
    console.log(this.projectForm);
    
    this.onClosePopup();
    
  }

}
