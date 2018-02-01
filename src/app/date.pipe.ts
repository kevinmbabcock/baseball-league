import { Pipe, PipeTransform } from '@angular/core';
import { Game } from './game.model';

@Pipe({
  name: 'date',
  pure: false
})
export class DatePipe implements PipeTransform {

  transform(input: Game[], fixed) {
    if (input) {
      for (let i=0; i < input.length; i++)  {
         let compare = (a:Game, b:Game) => {
          if (a.date < b.date)
            return -1;
          if (a.date > b.date)
            return 1;
          return 0;
        }
        return input.sort(compare)
      }
    }
  }
}
