import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from '../team.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Player } from '../player.model';
import { Team } from '../team.model';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
  providers: [TeamService]
})
export class TeamListComponent implements OnInit {
  teams: FirebaseListObservable<any[]>;
  currentRoute = this.router.url;

  constructor(private router: Router, private teamService: TeamService) { }

  ngOnInit() {
    this.teams = this.teamService.getTeams();
    console.log(this.teams);
  }

  goToDetailPage(clickedTeam) {
    this.router.navigate(['teams', clickedTeam.$key]);
  }

}
