import { Component, OnInit } from '@angular/core';
import { FeedingService } from '../../services/feeding.service';
import { Feeding } from '../../models/feeding';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import * as moment from 'moment';

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
  currentUser;
  moment
  todaysTime = moment().format('LT');

  currentFeeding = {
    time: this.todaysTime,
    bmAmount: 0,
    fAmount: 0,
    parent: this.afAuth.auth.currentUser.displayName,
    pee: true,
    poop: true
  }

  constructor(private feedingService: FeedingService, private afAuth: AngularFireAuth) {
    this.currentUser = this.afAuth.auth.currentUser;
   }

  ngOnInit() {
    /* Subscribe to feedings to get any updates/deletes, etc */
    this.feedingService.getFeedings(this.currentUser.uid).subscribe(feedings => {

      this.feedings = feedings;
      /* Get all the months for the feedings in the database & sort them from most recent first */
      this.getMonths()
      this.months = this.sortMonthsDesc(this.months);
    });

    
  }
  
  deleteFeeding(e, feeding){
    this.feedingService.deleteFeeding(feeding);
  }

  updateButton(e, feeding) {
    this.editState = true;
    this.feedingToEdit = feeding;
  }

  updateFeeding(e, feeding) {
    this.feedingToEdit = feeding;

    var feedingDate = moment(this.feedingToEdit.date).format('LL');
    // Change currentFeeding time to ISO format & Add to feedings
    this.currentFeeding.time = moment(feedingDate + " " + this.currentFeeding.time).format();
    this.feedingToEdit.feedings.push(this.currentFeeding); 
    // Update the feeding
    this.feedingService.updateFeeding(this.feedingToEdit);
    // Resets
    this.currentFeeding = {
      time: moment().format('LT'),
      bmAmount: 0,
      fAmount: 0,
      parent: this.afAuth.auth.currentUser.displayName,
      pee: true,
      poop: true
    };
    this.editState = false;
    this.feedingToEdit = null;
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
