import { Pipe, PipeTransform } from '@angular/core';
import { Game } from './game.model';

@Pipe({
  name: 'game',
  pure: false
})
export class GamePipe implements PipeTransform {

  transform(input: Game[], desiredGameTeam) {
    if (input) {
      const output: Game[] = [];
      let teamNames: string[] = ["Titans", "Tigers", "Rage", "Expos", "Brewers", "Braves"];
      console.log(desiredGameTeam);
      if (!(desiredGameTeam) || (desiredGameTeam === "All Teams")){
        return input;
      }
      teamNames.forEach(function(teamName) {
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
