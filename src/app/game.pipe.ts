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
      if (desiredGameTeam === "Titans") {
        for (let i=0; i < input.length; i++) {
          if ((input[i].team1 === "Titans") || (input[i].team2 === "Titans")) {
            output.push(input[i]);
          }
        }
        return output;
      } else if (desiredGameTeam === "Tigers") {
        for (let i=0; i < input.length; i++) {
          if ((input[i].team1 === "Tigers") || (input[i].team2 === "Tigers")) {
            output.push(input[i]);
          }
        }
        return output;
      } else if (desiredGameTeam === "Rage") {
        for (let i=0; i < input.length; i++) {
          if ((input[i].team1 === "Rage") || (input[i].team2 === "Rage")) {
            output.push(input[i]);
          }
        }
        return output;
      } else if (desiredGameTeam === "Expos") {
        for (let i=0; i < input.length; i++) {
          if ((input[i].team1 === "Expos") || (input[i].team2 === "Expos")) {
            output.push(input[i]);
          }
        }
       return output;
     } else if (desiredGameTeam === "Brewers") {
        for (let i=0; i < input.length; i++) {
          if ((input[i].team1 === "Brewers") || (input[i].team2 === "Brewers")) {
            output.push(input[i]);
          }
        }
        return output;
      } else if (desiredGameTeam === "Braves") {
         for (let i=0; i < input.length; i++) {
           if ((input[i].team1 === "Braves") || (input[i].team2 === "Braves")) {
             output.push(input[i]);
           }
         }
         return output;
      } else {
        return input;
      }
    }
  }

}
