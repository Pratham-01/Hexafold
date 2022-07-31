import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { FeatureCostPopupComponent } from '../popups/feature-cost-popup/feature-cost-popup.component';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {

  projectId:any;
  projectData:any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.projectId = this.activatedRoute.snapshot.paramMap.get('project_id');
    // console.log(this.projectId);
    this.getProjectData();
    
  }

  getProjectData(){
    // TODO : GET CALL
    this.projectData = {
      "id" : this.projectId,
      "title": "Project "+this.projectId,
      "features": [
        { title:"feature1", accepted:true, cost: 125, start_date: new Date(), deadline: 3, status: "pending"},
        { title:"feature2", accepted:true, cost: 125, start_date: new Date(), deadline: 3, status: "done"},
        { title:"feature3", accepted:false, cost: 125, start_date: new Date(), deadline: 3},
        { title:"feature4", accepted:false, cost: 125, start_date: new Date(), deadline: 3},
      ],
      "comments": [
        { user: "Pushpit", description: "We should add this feature We should add this feature We should add this feature We should add this feature We should add this featureWe should add this feature We should add this feature We should add this feature" },
        { user: "Photon", description: "Bhai kyooo" },
        { user: "Divya", description: "Haa bhai nhi dalre" },
      ]
    }
    var doneFeaturesCount:any = 0;
    var acceptedFeaturesCount:any = 0;
    this.projectData.features.forEach((feat:any) => {
      if(feat.accepted == true) {
        acceptedFeaturesCount++;
        if(feat.status == "done") doneFeaturesCount++;
      }
    });
    this.projectData.progress = (doneFeaturesCount / acceptedFeaturesCount)*100;
  }

  openAcceptFeaturePopup(feature:any){
    let dialogRef = this.dialog.open(FeatureCostPopupComponent, {
      height: '250px',
      width: '300px',
      data: {feature:feature}
    });
  }


}
