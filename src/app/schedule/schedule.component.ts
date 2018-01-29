import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  providers: [PlayerService]
})
export class ScheduleComponent implements OnInit {
  games: FirebaseListObservable<any[]>;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.games = this.playerService.getGames();
  }

}
