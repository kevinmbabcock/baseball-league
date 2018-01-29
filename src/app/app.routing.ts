import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { TeamListComponent } from './team-list/team-list.component';
import { RosterComponent } from './roster/roster.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { AdminComponent } from './admin/admin.component';


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
    component: AdminComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
