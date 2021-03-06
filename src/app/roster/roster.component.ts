import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Player } from '../player.model';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css'],
  providers: [PlayerService]
})
export class RosterComponent implements OnInit {
  @Input('teamName') filterByTeamName: string;
  players: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;


  constructor(private router: Router, private playerService: PlayerService) { }



  ngOnInit() {
    this.players = this.playerService.getPlayers();
  }

  goToDetailPage(clickedPlayer) {
    this.router.navigate(['players', clickedPlayer.$key]);
  }

}
