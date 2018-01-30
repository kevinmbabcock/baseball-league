import { Player } from './player.model';
import { Game } from './game.model';

export class Team {
  public players: = Player[];
  public games: = Game[];
  constructor (public win: number, public loss: number) { }
}
