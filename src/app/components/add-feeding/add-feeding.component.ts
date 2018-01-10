import { Component, OnInit, EventEmitter } from '@angular/core';
import { FeedingService } from '../../services/feeding.service';
import { Feeding } from '../../models/feeding';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import {MaterializeAction} from 'angular2-materialize';
import * as moment from 'moment';

@Component({
  selector: 'app-add-feeding',
  templateUrl: './add-feeding.component.html',
  styleUrls: ['./add-feeding.component.css']
})
export class AddFeedingComponent implements OnInit {
  m = moment();
  todaysDate = moment().format('LL');
  todaysTime = moment().format('LT');
  modalActions = new EventEmitter<string|MaterializeAction>();

  currentFeeding = {
    time: this.todaysTime,
    bmAmount: 0,
    fAmount: 0,
    parent: this.afAuth.auth.currentUser.displayName,
    pee: true,
    poop: true
  }

  feeding: Feeding = {
    date: this.todaysDate,
    uid: this.afAuth.auth.currentUser.uid,
    feedings: [
      this.currentFeeding
    ]
  }

  constructor(private feedingService : FeedingService, private afAuth: AngularFireAuth) { }

  onSubmit(){
    console.log('called');
    if(this.currentFeeding.parent != ''){
      /* Switch feeding time & date to ISO format */
      
      this.currentFeeding.time = moment(this.feeding.date + " " + this.currentFeeding.time).format();
      this.feeding.date = moment(this.feeding.date).format();
      this.feedingService.addFeeding(this.feeding);

      // Resets
      this.currentFeeding = {
        time: moment().format('LT'),
        bmAmount: 0,
        fAmount: 0,
        parent: '',
        pee: true,
        poop: true
      }
      this.feeding.date = moment().format('LL');
    }
  }

  openModal() {
    this.modalActions.emit({action:"modal",params:['open']});
  }
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }

  ngOnInit() {
  }

}
