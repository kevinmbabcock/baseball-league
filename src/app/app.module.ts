import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth'; //authentication part
import { AuthGuard } from './auth-guard.service'; //Route Guard
import { masterFirebaseConfig } from './api-keys';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { RosterComponent } from './roster/roster.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AdminComponent } from './admin/admin.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { EditTeamComponent } from './edit-team/edit-team.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { AddGameComponent } from './add-game/add-game.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { TeamMembersPipe } from './team-members.pipe';
import { GamePipe } from './game.pipe';
import { AuthenticationService } from './authentication.service';
import { DatePipe } from './date.pipe';  //Making our Service Accessible Everywhere

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket,
  messagingSenderId: masterFirebaseConfig.messagingSenderId
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TeamListComponent,
    TeamDetailsComponent,
    RosterComponent,
    ScheduleComponent,
    AdminComponent,
    AddTeamComponent,
    EditTeamComponent,
    AddPlayerComponent,
    EditPlayerComponent,
    AddGameComponent,
    EditGameComponent,
    PlayerDetailsComponent,
    TeamMembersPipe,
    GamePipe,
    DatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule, //authentication part
  ],
  providers: [AuthGuard, AuthenticationService], //Route Guard
  bootstrap: [AppComponent]
})
export class AppModule { }
