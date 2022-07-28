import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainingService } from 'src/app/services/training.service';

@Component({
  selector: 'app-training-home',
  templateUrl: './training-home.component.html',
  styleUrls: ['./training-home.component.scss']
})
export class TrainingHomeComponent implements OnInit {

  trainingData:any;
  currentTrainingTab:any = "in-progress";
  newTrainingForm:any;
  collapseOpenStatus:any = '';

  constructor(
    private router: Router,
    private trainingService: TrainingService
  ) { }

  ngOnInit(): void {
    this.getTrainingDataForEmployee();
    this.resetNewTrainingData();
  }

  // =========================================== GET PAGE DATA =========================================== 
  getTrainingDataForEmployee(){
    var today = new Date(), tomorrow = new Date();
    tomorrow.setDate(today.getDate()+10);
    this.trainingData = [
      {id:1, assignee: "Manager 1", title:"Introduction to Cloud Computing", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", reward_points: 20, urls: ['https://youtu.be/yw04QD1LaB0', 'https://youtu.be/TdbQ2CX3jCQ'], assigned_date: today, deadline: tomorrow, completed: true},
      {id:2, assignee: "Super user", title:"Introduction to DBMS", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", reward_points: 30, urls: ['https://youtu.be/yw04QD1LaB0', 'https://youtu.be/TdbQ2CX3jCQ','https://youtu.be/yw04QD1LaB0'], assigned_date: today, deadline: tomorrow, completed: false},
      {id:3, assignee: "Manager 1", title:"Introduction to Cloud Computing", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", reward_points: 20, urls: ['https://youtu.be/yw04QD1LaB0', 'https://youtu.be/TdbQ2CX3jCQ', 'https://youtu.be/yw04QD1LaB0'], assigned_date: today, deadline: tomorrow, completed: true},
      {id:4, assignee: "Super user", title:"Introduction to DBMS", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", reward_points: 30, urls: ['https://youtu.be/yw04QD1LaB0', 'https://youtu.be/TdbQ2CX3jCQ'], assigned_date: today, deadline: tomorrow, completed: false},
    ];    
    // this.trainingService.setCurrUserTrainings(this.trainingData);
  }

  // =========================================== INTERACTIONS =========================================== 
  openTraining(training:any){
    this.router.navigate(["training/",training.id])
  }

  changeTrainingTab(tab:any){
    this.currentTrainingTab = tab;
    // let list = document.getElementById("trainings-list") as HTMLElement;
    // list.scrollTop = 0;
  }

  // openCollapsedSection(section:any){
  //   if (this.collapseOpenStatus == section){
  //     this.collapseOpenStatus = '';
  //   }else{
  //       this.collapseOpenStatus = section;
  //   }
  // }

  // =========================================== CREATE NEW TRAINING =========================================== 

  resetNewTrainingData(){
    this.newTrainingForm = {
      title : "",
      content: "",
      reward_points: 0,
      urls: []
    }
  }
  addNewTrainingUrl(){
    this.newTrainingForm.urls.push("")
  }
  removeNewTrainingUrl(i:any){
    this.newTrainingForm.urls.splice(i,1);
  }
  createTraining(){
    console.log(this.newTrainingForm);
    // TODO POST Call
    this.resetNewTrainingData();
  }

  // =========================================== Assign TRAINING =========================================== 



}
