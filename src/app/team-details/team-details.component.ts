import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Team } from '../team.model';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css'],
  providers: [TeamService]
})
export class TeamDetailsComponent implements OnInit {
  teamId: string;
  teamToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private teamService: TeamService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.teamId = urlParameters['id'];
    });
    this.teamToDisplay = this.teamService.getTeamById(this.teamId);
    console.log(this.teamToDisplay);
    // this.teamService.getTeamById(this.teamId).subscribe(dataLastEmittedFromObserver => {
    //   this.teamToDisplay = dataLastEmittedFromObserver;
    // });
  }

}
