import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-recreational',
  templateUrl: './recreational.component.html',
  styleUrls: ['./recreational.component.scss']
})
export class RecreationalComponent implements OnInit {

  constructor(
    private generalService: GeneralService
  ) { }

  activitiesList:any = ["Fun Facts", "Ackinator Game"];
  activeTab = 0;

  ngOnInit(): void {
  }

  changeActivity(i:any){
    this.activeTab = i;
  }

  factGenerator(){
    this.generalService.openMessageSnackBar("Mein toh pagal hu!", "OOHHHHH")
  }

}
