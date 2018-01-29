import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  providers: [GameService]
})
export class ScheduleComponent implements OnInit {
  games: FirebaseListObservable<any[]>;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.games = this.gameService.getGames();
  }

}
