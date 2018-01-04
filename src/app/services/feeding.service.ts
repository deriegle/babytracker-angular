import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Feeding } from '../models/feeding';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FeedingService {
  feedingsCollection: AngularFirestoreCollection<Feeding>;
  feedings: Observable<Feeding[]>;

  constructor(public afs: AngularFirestore) {
    this.feedings = this.afs.collection('feedings').valueChanges();
    
   }

  getFeedings(){
    return this.feedings;
  }
}

