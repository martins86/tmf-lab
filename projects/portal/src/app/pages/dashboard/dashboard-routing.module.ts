import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { FeatureToggleResolver } from '../../shared/resolvers/feature-toggle.resolver';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      featureToggleKeys: ['ft_any_key_a', 'ft_any_key_c'],
    },
    resolve: { featureToggleValues: FeatureToggleResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
