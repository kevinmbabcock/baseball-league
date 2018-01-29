import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class PlayerService {
  players: FirebaseListObservable<any[]>;


  constructor(private database: AngularFireDatabase) {
     this.players = database.list('players');
  }

  getPlayerById(playerId: string) {
    return this.database.object('players/' + playerId);
  }

  getPlayers() {
    return this.players;
  }

  addPlayer(newPlayer: Player) {
    this.players.push(newPlayer);
  }

  updatePlayer(localUpdatedPlayer) {
    const playerEntryInFirebase = this.getPlayerById(localUpdatedPlayer.$key);
    playerEntryInFirebase.update({name: localUpdatedPlayer.name, age: parseInt(localUpdatedPlayer.age, 10), position: localUpdatedPlayer.position, team: localUpdatedPlayer.team, jerseyNumber: parseInt(localUpdatedPlayer.jerseyNumber, 10)});
  }

  deletePlayer(localPlayerToDelete) {
    localPlayerToDelete.remove();
  }
}
