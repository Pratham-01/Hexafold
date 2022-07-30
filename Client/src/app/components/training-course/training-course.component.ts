import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { TrainingService } from 'src/app/services/training.service';

@Component({
  selector: 'app-training-course',
  templateUrl: './training-course.component.html',
  styleUrls: ['./training-course.component.scss']
})
export class TrainingCourseComponent implements OnInit {

  trainingId:any;
  trainingData:any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private trainingService: TrainingService
    
  ) { }

  ngOnInit(): void {
    this.trainingId = this.activatedRoute.snapshot.paramMap.get('course_id');
    // this.trainingData = this.trainingService.getParticularCurrUserTrainings(this.trainingId);
    this.getTrainingData();
    console.log("Incoming data : ", this.trainingData)
  }

  getTrainingData(){
    var today = new Date(), tomorrow = new Date();
    tomorrow.setDate(today.getDate()+10);
    this.trainingData = {id:1, assignee: "Manager 1", title:"Introduction to Cloud Computing", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", reward_points: 20, urls: ['https://youtu.be/yw04QD1LaB0', 'https://youtu.be/TdbQ2CX3jCQ'], assigned_date: today, deadline: tomorrow, completed: true};
      
  }

}
