import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultComponent } from './default.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@pages/dashboard/dashboard.module').then(
            (module) => module.DashboardModule
          ),
        pathMatch: 'full',
      },
      {
        path: 'login',
        loadChildren: () =>
          import('@pages/login/login.module').then(
            (module) => module.LoginModule
          ),
      },
      {
        path: 'maintenance',
        loadChildren: () =>
          import('@pages/maintenance/maintenance.module').then(
            (module) => module.MaintenanceModule
          ),
      },
      {
        path: 'register',
        loadChildren: () =>
          import('@pages/register/register-routing.module').then(
            (module) => module.RegisterRoutingModule
          ),
      },
      {
        path: '**',
        loadChildren: () =>
          import('@pages/not-found/not-found.module').then(
            (module) => module.NotFoundModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefaultRoutingModule {}
