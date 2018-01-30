import { Player } from './player.model';
import { Game } from './game.model';

export class Team {
  // public players: Player[];
  // public games: Game[];
  constructor (public name: string, public manager: string, public wins: number, public losses: number) { }
}
