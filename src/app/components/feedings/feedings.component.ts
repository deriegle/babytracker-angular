import { Component, OnInit } from '@angular/core';
import { FeedingService } from '../../services/feeding.service';
import { Feeding } from '../../models/feeding';

@Component({
  selector: 'app-feedings',
  templateUrl: './feedings.component.html',
  styleUrls: ['./feedings.component.css']
})
export class FeedingsComponent implements OnInit {
  feedings: Feeding[];

  constructor(private feedingService: FeedingService) { }

  ngOnInit() {
    this.feedingService.getFeedings().subscribe(feedings => {
      //console.log(feedings);
      this.feedings = feedings;
    });
  }

}
