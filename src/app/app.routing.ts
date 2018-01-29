import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const appRoutes: Routes = [
  {
    path: 'team/:name',
    component: TeamDetailsComponent
  },
  {
    path: 'player/:id',
    component: PlayerDetailsComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
