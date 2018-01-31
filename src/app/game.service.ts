import { Injectable } from '@angular/core';
import { Game } from './game.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class GameService {
  games: FirebaseListObservable<any[]>;


  constructor(private database: AngularFireDatabase) {
    this.games = database.list('games');
  }

  getGames() {
    return this.games;
  }

  addGame(newGame: Game) {
    this.games.push(newGame);
  }

  getGameById(gameId: string){
    return this.database.object('games/' + gameId);
  }

  updateGame(localUpdatedGame, team1, team2){
    const gameEntryInFirebase = this.getGameById(localUpdatedGame.$key);
    gameEntryInFirebase.update({team1: team1, team1Score: localUpdatedGame.team1Score,
    team2: team2, team2Score: localUpdatedGame.team2Score, date: localUpdatedGame.date, field: localUpdatedGame.field});
  }

  deleteGame(localGameToDelete){
    const gameEntryInFirebase = this.getGameById(localGameToDelete.$key);
    gameEntryInFirebase.remove();
  }

}
