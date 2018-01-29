import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class PlayerService {
  players: FirebaseListObservable<any[]>;
  games: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
     this.players = database.list('players');
     this.games = database.list('games');
  }

  getPlayerById(playerId: string) {
    return this.database.object('players/' + playerId);
  }

  getGames() {
    return this.games;
  }
}
