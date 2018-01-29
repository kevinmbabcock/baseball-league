import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Player } from '../player.model';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
  providers: [PlayerService]
})
export class TeamListComponent implements OnInit {
  teams: string[] = ["Braves", "Brewers", "Expos", "Rage", "Tigers", "Titans"];

  constructor(private router: Router, private playerService: PlayerService) { }

  ngOnInit() {
  }

  goToDetailPage(clickedTeam) {
    this.router.navigate(['teams', clickedTeam]);
  }

}
