import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { MomentModule } from 'angular2-moment';
import { NgPipesModule } from 'ngx-pipes';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { FeedingsComponent } from './components/feedings/feedings.component';
import { FeedingService } from './services/feeding.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddFeedingComponent } from './components/add-feeding/add-feeding.component';


@NgModule({
  declarations: [
    AppComponent,
    FeedingsComponent,
    NavbarComponent,
    AddFeedingComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    MomentModule,
    MaterializeModule,
    FormsModule,
    NgPipesModule
  ],
  providers: [FeedingService],
  bootstrap: [AppComponent]
})

export class AppModule { }
