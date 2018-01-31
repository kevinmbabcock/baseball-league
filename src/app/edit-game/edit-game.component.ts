import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { TeamService } from '../team.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css'],
  providers: [GameService, TeamService]
})
export class EditGameComponent implements OnInit {
  games: FirebaseListObservable<any[]>;
  teams: FirebaseListObservable<any[]>;

  constructor(private gameService: GameService, private teamService: TeamService) { }

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
