import { Component, OnInit } from '@angular/core';
import { Game } from '../game.model';
import { GameService } from '../game.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css'],
  providers: [GameService, TeamService]
})
export class AddGameComponent implements OnInit {
  teams: FirebaseListObservable<any[]>;
  constructor(private gameService: GameService, private teamService: TeamService) { }

  ngOnInit() {
    this.teams = this.teamService.getTeams();
  }

  submitForm(team1: string, team1Score: string, team2: string, team2Score: string, date: string, field: string) {
    const newGame: Game = new Game(team1, team1Score, team2, team2Score, date, field);
    this.gameService.addGame(newGame);
  }

}
