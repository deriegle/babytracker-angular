import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { MomentModule } from 'angular2-moment';
import { NgPipesModule } from 'ngx-pipes';


import { AppComponent } from './app.component';
import { FeedingsComponent } from './components/feedings/feedings.component';
import { FeedingService } from './services/feeding.service';

@NgModule({
  declarations: [
    AppComponent,
    FeedingsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MomentModule,
    NgPipesModule
  ],
  providers: [FeedingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
