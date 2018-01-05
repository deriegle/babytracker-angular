import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Feeding } from '../models/feeding';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FeedingService {
  feedingsCollection: AngularFirestoreCollection<Feeding>;
  feedings: Observable<Feeding[]>;
  feedingDoc: AngularFirestoreDocument<Feeding>;

  constructor(public afs: AngularFirestore) {
    //this.feedings = this.afs.collection('feedings').valueChanges();
    /* Gives us data plus document ID from Firestore */
    this.feedingsCollection = this.afs.collection('feedings');
    this.feedings = this.feedingsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Feeding;
        data.id = a.payload.doc.id;
        return data;
      });
    });
   }

  getFeedings(){
    return this.feedings;
  }

  addFeeding(feeding: Feeding) {
    this.feedingsCollection.add(feeding);
  }

  deleteFeeding(feeding: Feeding) {
    this.feedingDoc = this.afs.doc(`feedings/${feeding.id}`);
    this.feedingDoc.delete();
  }
}

