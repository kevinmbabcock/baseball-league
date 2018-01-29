import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css'],
  providers: [PlayerService]
})
export class EditGameComponent implements OnInit {
  games: FirebaseListObservable<any[]>;

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.games = this.playerService.getGames();
  }

  beginUpdatingGame(gameToUpdate){
    this.playerService.updateGame(gameToUpdate);
  }

  beginDeletingGame(gameToDelete) {
    if(confirm("Are you sure you want to delete this item from the inventory?")){
      this.playerService.deleteGame(gameToDelete);
    }
  }

}
