import { Pipe, PipeTransform } from '@angular/core';
import { Player } from './player.model';

@Pipe({
  name: 'teamMembers',
  pure: false
})
export class TeamMembersPipe implements PipeTransform {

  transform(input: Player[], desiredTeamName) {
    //if(input) statement handles the error that ocurs when file is loading data from database and our input not existing for that time
    if (input) {
      const output: Player[] = [];
      if (desiredTeamName === "Titans") {
        for (let i=0; i < input.length; i++) {
          if (input[i].team === "Titans") {
            output.push(input[i]);
          }
        }
        return output;
      } else if (desiredTeamName === "Tigers") {
        for (let i=0; i < input.length; i++) {
          if (input[i].team === "Tigers") {
            output.push(input[i]);
          }
        }
        return output;
      } else if (desiredTeamName === "Rage") {
        for (let i=0; i < input.length; i++) {
          if (input[i].team === "Rage") {
            output.push(input[i]);
          }
        }
        return output;
      } else if (desiredTeamName === "Expos") {
        for (let i=0; i < input.length; i++) {
          if (input[i].team === "Expos") {
            output.push(input[i]);
          }
        }
       return output;
     } else if (desiredTeamName === "Brewers") {
        for (let i=0; i < input.length; i++) {
          if (input[i].team === "Brewers") {
            output.push(input[i]);
          }
        }
        return output;
      } else if (desiredTeamName === "Braves") {
         for (let i=0; i < input.length; i++) {
           if (input[i].team === "Braves") {
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
