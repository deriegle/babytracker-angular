import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Feeding } from '../models/feeding';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FeedingService {
  feedingsCollection: AngularFirestoreCollection<Feeding>;
  feedings: Observable<Feeding[]>;
  feedingDoc: AngularFirestoreDocument<Feeding>;
  currentUID: string = '';

  constructor(public afs: AngularFirestore, private afAuth: AngularFireAuth) {
    //this.feedings = this.afs.collection('feedings').valueChanges();
    /* Gives us data plus document ID from Firestore */
    this.feedingsCollection = this.afs.collection('feedings');
    this.feedings = this.afs.collection('feedings', ref => ref.where('uid', '==', this.currentUID)).snapshotChanges().map
    (changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Feeding;
        data.id = a.payload.doc.id;
        return data;
      });
    });

   }

  getFeedings(uid){
    this.feedings = this.afs.collection('feedings', ref => ref.where('uid', '==', uid))
    .snapshotChanges().map
    (changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Feeding;
        data.id = a.payload.doc.id;
        return data;
      });
    });
    return this.feedings;
  }

  updateFeeding(feeding: Feeding){
    this.feedingDoc = this.afs.doc(`feedings/${feeding.id}`);
    this.feedingDoc.set(feeding);
  }

  addFeeding(feeding: Feeding) {
    this.feedingsCollection.add(feeding);
  
    console.log('Feeding Added');
  }

  deleteFeeding(feeding: Feeding) {
    this.feedingDoc = this.afs.doc(`feedings/${feeding.id}`);
    this.feedingDoc.delete();
  }
}

