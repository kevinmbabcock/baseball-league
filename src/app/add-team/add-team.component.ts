import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { Team } from '../team.model';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css'],
  providers: [TeamService]
})
export class AddTeamComponent implements OnInit {
  user;
  private isLoggedIn: Boolean;
  private userName: String;

  constructor(public authService: AuthenticationService, private teamService: TeamService) {
    this.authService.user.subscribe(user => {
      if (user === null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
        this.userName = user.displayName;
      }
    });  
  }

  ngOnInit() {
  }

  submitForm(name: string, manager: string) {
    const newTeam: Team = new Team(name, manager);
    this.teamService.addTeam(newTeam);
  }

}
