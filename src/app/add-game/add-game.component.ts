import { Component, OnInit } from '@angular/core';
import { Game } from '../game.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css'],
  providers: [PlayerService]
})
export class AddGameComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  submitForm(team1: string, team2: string, date: string, field: string) {
    const newGame: Game = new Game(team1, team2, date, field);
    this.playerService.addGame(newGame);
  }

}
