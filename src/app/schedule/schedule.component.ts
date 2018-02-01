import { Component, Input, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  providers: [GameService, TeamService]
})
export class ScheduleComponent implements OnInit {
  @Input('teamName') filterByTeamName: string;
  games: FirebaseListObservable<any[]>;
  teams: FirebaseListObservable<any[]>;
  filterByTeam: string = "";

  constructor(private gameService: GameService, private teamService: TeamService) { }

  ngOnInit() {
    this.games = this.gameService.getGames();
    this.teams = this.teamService.getTeams();
  }

  onChange(optionFromMenu) {
    this.filterByTeam = optionFromMenu;
  }

}
