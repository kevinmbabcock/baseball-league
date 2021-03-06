import { Component, Input, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { TeamService } from '../team.service';
import { Router } from '@angular/router';

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
  currentRoute: string = this.router.url;
  fixed:string = "working"

  constructor(private router: Router, private gameService: GameService, private teamService: TeamService) { }

  ngOnInit() {
    this.games = this.gameService.getGames();
    this.teams = this.teamService.getTeams();
  }

  onChange(optionFromMenu) {
    this.filterByTeamName = optionFromMenu;
  }

}
