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
    path: 'teams/:name',
    component: TeamDetailsComponent
  },
  {
    path: 'players/:id',
    component: PlayerDetailsComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
    {
      path: 'add-player',
      component: AddPlayerComponent,
      outlet: 'content'
    },
    {
      path: 'edit-player',
      component: RosterComponent,
      outlet: 'content'
    },
    {
      path: 'edit-player/:id',
      component: EditPlayerComponent,
      outlet: 'content'
    },
    {
      path: 'add-team',
      component: AddTeamComponent,
      outlet: 'content'
    },
    {
      path: 'edit-team',
      component: EditTeamComponent,
      outlet: 'content'
    },
    {
      path: 'add-game',
      component: AddGameComponent,
      outlet: 'content'
    },
    {
      path: 'edit-game',
      component: EditGameComponent,
      outlet: 'content'
    }
  ]}
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
