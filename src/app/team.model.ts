import { Player } from './player.model';
import { Game } from './game.model';

export class Team {

  public players: Player = [];
  public games: Game = [];
  public wins: 0;
  public losses: 0;
  constructor (public name: string, public manager: string) { }

}
