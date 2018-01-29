import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class PlayerService {
  playerss: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
     this.players = database.list('players');
  }
  getPlayerById(playerId: string) {
    return this.database.object('players/' + playerId);
  }
}
