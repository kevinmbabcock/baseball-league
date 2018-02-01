import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { TeamService } from '../team.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css'],
  providers: [GameService, TeamService]
})
export class EditGameComponent implements OnInit {
  games: FirebaseListObservable<any[]>;
  teams: FirebaseListObservable<any[]>;
  user;
  private isLoggedIn: Boolean;
  private userName: String;

  constructor(public authService: AuthenticationService, private gameService: GameService, private teamService: TeamService) {
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
    this.games = this.gameService.getGames();
    this.teams = this.teamService.getTeams();
  }

  beginUpdatingGame(gameToUpdate, team1, team2){
    this.gameService.updateGame(gameToUpdate, team1, team2);
  }

  beginDeletingGame(gameToDelete) {
    if(confirm("Are you sure you want to delete this item from the inventory?")){
      this.gameService.deleteGame(gameToDelete);
    }
  }

}
