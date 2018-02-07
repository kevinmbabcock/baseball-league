import { Pipe, PipeTransform } from '@angular/core';
import { Game } from './game.model';
import { TeamService } from './team.service';

@Pipe({
  name: 'game',
  pure: false
})
export class GamePipe implements PipeTransform {
  teamNames: string[];

  constructor(private teamService: TeamService) {
      this.teamNames = this.teamService.getTeamNames();
   }

  transform(input: Game[], desiredGameTeam: string) {
    if (input) {
      const output: Game[] = [];
      // let teamNames: string[] = ["Titans", "Tigers", "Rage", "Expos", "Brewers", "Braves"];
      if (!(desiredGameTeam) || (desiredGameTeam === "All Teams")){
        return input;
      }
      this.teamNames.forEach(function(teamName) {
        if (desiredGameTeam === teamName) {
          for (let i=0; i < input.length; i++) {
            if ((input[i].team1 === teamName) || (input[i].team2 === teamName)) {
              output.push(input[i]);
            }
          }
        }
      })
      return output;
    } else {
    return input;

    }
  }

}
