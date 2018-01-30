import { Injectable } from '@angular/core';
import { Team } from './team.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class TeamService {
  teams: FirebaseListObservable<any[]>;


  constructor(private database: AngularFireDatabase) {
     this.teams = database.list('teams');
  }

  getTeamById(teamId: string) {
    return this.database.object('teams/' + teamId);
  }

  getTeams() {
    return this.teams;
  }

  addTeam(newTeam: Team) {
    this.teams.push(newTeam);
  }

  updateTeam(localUpdatedTeam) {
    const teamEntryInFirebase = this.getTeamById(localUpdatedTeam.$key);
    teamEntryInFirebase.update({name: localUpdatedTeam.name, manager: localUpdatedTeam.manager});
  }

  deleteTeam(localTeamToDelete) {
    const teamEntryInFirebase = this.getTeamById(localTeamToDelete.$key);
    teamEntryInFirebase.remove();
  }
}
