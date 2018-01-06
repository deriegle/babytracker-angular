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
  editState: boolean = false;
  feedingToEdit: Feeding;

  constructor(private feedingService: FeedingService) { }

  ngOnInit() {
    /* Subscribe to feedings to get any updates/deletes, etc */
    this.feedingService.getFeedings().subscribe(feedings => {

      this.feedings = feedings;
      /* Get all the months for the feedings in the database & sort them from most recent first */
      this.getMonths()
      this.months = this.sortMonthsDesc(this.months);
    });
  }
  
  deleteFeeding(e, feeding){
    this.feedingService.deleteFeeding(feeding);
  }

  editFeeding(e, feeding){
    this.editState = true;
    this.feedingToEdit = feeding;
  }

  getMonths(): any {
    var monthStrings = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    /* Grab the month & year for each feeding in the database,
    Add each month to the array as long as it hasn't been added previously */
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

  /* Use ISO format to sort Months in Database from Newest to Oldest */
  sortMonthsDesc(arr){
    arr = arr.sort(function(a, b){
      return (a < b) ? 1 : ((a > b) ? -1 : 0);
    });
    return arr;
  }

  /* Use ISO format to sort Months in Databse from Oldest to Newest */
  sortMonthsAsc(arr){
    arr = arr.sort(function(a, b){
      return (a < b) ? -1 : ((a > b) ? 1 : 0);
    });
    return arr;
  }

}
