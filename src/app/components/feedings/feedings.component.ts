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
      // Sort Months by ISO Format after getting them
      this.months = this.sortMonthsDesc(this.months);
    });
  }
  
  deleteFeeding(e, feeding){
    this.feedingService.deleteFeeding(feeding);
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

  sortMonthsDesc(arr){
    arr = arr.sort(function(a, b){
      return (a < b) ? 1 : ((a > b) ? -1 : 0);
    });
    return arr;
  }

  sortMonthsAsc(arr){
    arr = arr.sort(function(a, b){
      return (a < b) ? -1 : ((a > b) ? 1 : 0);
    });
    return arr;
  }

}
