import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { Team } from '../team.model';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css'],
  providers: [TeamService]
})
export class AddTeamComponent implements OnInit {

  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }

  submitForm(name: string, manager: string) {
    const newTeam: Team = new Team(name, manager);
    this.teamService.addTeam(newTeam);
  }

}
