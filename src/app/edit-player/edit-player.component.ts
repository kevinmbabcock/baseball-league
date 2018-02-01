import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Team } from '../team.model';
import { TeamService } from '../team.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css'],
  providers: [PlayerService, TeamService]
})
export class EditPlayerComponent implements OnInit {
  playerToDisplay = Player;
  playerId: string;
  positions: string[] = ["P", "C", "1B", "2B", "3B", "SS", "RF", "CF", "LF", "RF", "INF", "OF", "UTIL"];
  teams: FirebaseListObservable<any[]>;
  user;
  private isLoggedIn: Boolean;
  private userName: String;

  constructor(public authService: AuthenticationService, private route: ActivatedRoute, private location: Location, private playerService: PlayerService, private teamService: TeamService) {
    this.authService.user.subscribe(user => {
      if (user === null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
      }
    });
  }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.playerId = urlParameters['id'];
    });
    this.playerService.getPlayerById(this.playerId).subscribe(dataLastEmittedFromObserver => {
      this.playerToDisplay = dataLastEmittedFromObserver;
    });
    this.teams = this.teamService.getTeams();
  }

  beginUpdatingPlayer(playerToUpdate, position, team) {
    this.playerService.updatePlayer(playerToUpdate, position, team);
  }

  beginDeletingPlayer(playerToDelete) {
    if(confirm("Are you sure you want to delete this player from your roster?")){
      this.playerService.deletePlayer(playerToDelete);
    }
  }

}
