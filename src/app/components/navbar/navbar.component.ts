import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-navbar',
  template: `
  <nav>
    <div *ngIf="afAuth.authState | async as user; else showLogin" class="nav-wrapper black">
      <div class="container">
        <a href="#" class="brand-logo">BabyTracker</a>
        <ul id="nav-mobile" class="right">
          <li><a href="#">Feedings</a></li>
          <li>Logged In as: <strong>{{user.displayName}}</strong></li>
          <li><a (click)="logout()">Logout</a></li>
        </ul>
      </div>
    </div>
    <ng-template #showLogin>
      <div class="nav-wrapper black">
        <div class="container">
          <a routerLink="login" class="brand-logo">Baby Tracker</a>
          <ul id="nav-mobile" class="right">
            <li><a (click)="login()">Login</a></li>
          </ul>
        </div>
      </div>
    </ng-template>
  </nav>`,
  /*templateUrl: './navbar.component.html',*/
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
