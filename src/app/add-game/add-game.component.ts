import { Component, OnInit } from '@angular/core';
import { Game } from '../game.model';
import { GameService } from '../game.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css'],
  providers: [GameService]
})
export class AddGameComponent implements OnInit {

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  submitForm(team1: string, team1Score: string, team2: string, team2Score: string, date: string, field: string) {
    const newGame: Game = new Game(team1, team1Score, team2, team2Score, date, field);
    this.gameService.addGame(newGame);
  }

}
