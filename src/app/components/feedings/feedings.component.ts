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
  months: string[] = [];
  constructor(private feedingService: FeedingService) { }

  ngOnInit() {
    this.feedingService.getFeedings().subscribe(feedings => {
      //console.log(feedings);
      this.feedings = feedings;
      this.getMonths()
    });
  }

  getMonths(): any {
    var monthStrings = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.feedings.forEach((feed) => {
      var date = new Date(feed.date);
      var month = date.getMonth();
      var year = date.getFullYear();
      var string = new Date(monthStrings[month] + ' ' + year).toISOString();
      //var string = monthStrings[month] + ' ' + year;
      if(this.months.indexOf(string) === -1) {
        this.months.push(string);
      }
      console.log(this.months);
    });
  }

}
