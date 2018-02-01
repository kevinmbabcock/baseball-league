import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player.model';
import { Team } from '../team.model';
import { TeamService } from '../team.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css'],
  providers: [PlayerService, TeamService]
})
export class AddPlayerComponent implements OnInit {
  positions: string[] = ["P", "C", "1B", "2B", "3B", "SS", "RF", "CF", "LF", "RF", "INF", "OF", "UTIL"];
  teams: FirebaseListObservable<any[]>;
  user;
  private isLoggedIn: Boolean;
  private userName: String;

  constructor(public authService: AuthenticationService, private playerService: PlayerService, private teamService: TeamService) {
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
    this.teams = this.teamService.getTeams();
  }

  submitForm(name: string, age: string, position: string, team: string, jerseyNumber: string) {
    const newPlayer: Player = new Player(name, parseInt(age, 10), position, team, parseInt(jerseyNumber, 10));
    this.playerService.addPlayer(newPlayer);
  }

}
