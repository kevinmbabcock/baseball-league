import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css'],
  providers: [GameService]
})
export class EditGameComponent implements OnInit {
  games: FirebaseListObservable<any[]>;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.games = this.gameService.getGames();
  }

  beginUpdatingGame(gameToUpdate){
    this.gameService.updateGame(gameToUpdate);
  }

  beginDeletingGame(gameToDelete) {
    if(confirm("Are you sure you want to delete this item from the inventory?")){
      this.gameService.deleteGame(gameToDelete);
    }
  }

}
