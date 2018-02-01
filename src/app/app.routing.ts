import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { TeamListComponent } from './team-list/team-list.component';
import { RosterComponent } from './roster/roster.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { AdminComponent } from './admin/admin.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { EditTeamComponent } from './edit-team/edit-team.component';
import { AddGameComponent } from './add-game/add-game.component';
import { EditGameComponent } from './edit-game/edit-game.component';
import { AuthGuard } from './auth-guard.service';


const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'teams',
    component: TeamListComponent
  },
  {
    path: 'players',
    component: RosterComponent
  },
  {
    path: 'schedule',
    component: ScheduleComponent
  },
  {
    path: 'teams/:id',
    component: TeamDetailsComponent
  },
  {
    path: 'players/:id',
    component: PlayerDetailsComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'admin/add-player',
    component: AddPlayerComponent,
  },
  {
    path: 'admin/edit-player',
    component: RosterComponent
  },
  {
    path: 'admin/edit-player/:id',
    component: EditPlayerComponent
  },
  {
    path: 'admin/add-team',
    component: AddTeamComponent
  },
  {
    path: 'admin/edit-team',
    component: TeamListComponent
  },
  {
    path: 'admin/edit-team/:id',
    component: EditTeamComponent
  },
  {
    path: 'admin/add-game',
    component: AddGameComponent
  },
  {
    path: 'admin/edit-game',
    component: EditGameComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
