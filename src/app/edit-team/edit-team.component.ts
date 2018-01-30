import { Component, OnInit } from '@angular/core';
import { Team } from '../team.model';
import { TeamService } from '../team.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css'],
  providers: [TeamService]
})
export class EditTeamComponent implements OnInit {
  teamToDisplay = Team;
  teamId: string;

  constructor(private route: ActivatedRoute, private location: Location, private teamService: TeamService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.teamId = urlParameters['id'];
    });
    this.teamService.getTeamById(this.teamId).subscribe(dataLastEmittedFromObserver => {
      this.teamToDisplay = dataLastEmittedFromObserver;
    });
  }

  beginUpdatingTeam(teamToUpdate) {
    this.teamService.updateTeam(teamToUpdate);
  }

  beginDeletingTeam(teamToDelete) {
    if(confirm("Are you sure you want to delete this team from the league?")){
      this.teamService.deleteTeam(teamToDelete);
    }
  }
}
