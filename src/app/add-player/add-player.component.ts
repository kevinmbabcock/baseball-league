import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player.model';
import { Team } from '../team.model';
import { TeamService } from '../team.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css'],
  providers: [PlayerService, TeamService]
})
export class AddPlayerComponent implements OnInit {
  positions: string[] = ["P", "C", "1B", "2B", "3B", "SS", "RF", "CF", "LF", "RF", "INF", "OF", "UTIL"];
  teams: FirebaseListObservable<any[]>;

  constructor(private playerService: PlayerService, private teamService: TeamService) { }

  ngOnInit() {
    this.teams = this.teamService.getTeams();
    console.log(this.positions);
    console.log(this.teams);
  }

  submitForm(name: string, age: string, position: string, team: string, jerseyNumber: string) {
    const newPlayer: Player = new Player(name, parseInt(age, 10), position, team, parseInt(jerseyNumber, 10));
    this.playerService.addPlayer(newPlayer);
  }

}
