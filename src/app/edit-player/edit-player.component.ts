import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css'],
  providers: [PlayerService]
})
export class EditPlayerComponent implements OnInit {
  playerToDisplay = Player;
  playerId: string;

  constructor(private route: ActivatedRoute, private location: Location, private playerService: PlayerService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.playerId = urlParameters['id'];
    });
    this.playerService.getPlayerById(this.playerId).subscribe(dataLastEmittedFromObserver => {
      this.playerToDisplay = dataLastEmittedFromObserver;
    });
  }

  beginUpdatingPlayer(playerToUpdate) {
    this.playerService.updatePlayer(playerToUpdate);
  }

  beginDeletingPlayer(playerToDelete) {
    if(confirm("Are you sure you want to delete this player from your roster?")){
      this.playerService.deletePlayer(playerToDelete);
    }
  }

}
