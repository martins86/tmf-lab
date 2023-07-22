import { Component } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  ftAnyKeyA: boolean = false;
  ftAnyKeyC: boolean = false;

  constructor(private activatedRoute: ActivatedRoute) {
    this.loadFeatureToggleValues();
  }

  loadFeatureToggleValues(): void {
    this.activatedRoute.data.subscribe((data: Data) => {
      this.ftAnyKeyA =
        data?.['featureToggleValues'].ft_any_key_a?.enabled ?? false;
      this.ftAnyKeyC =
        data?.['featureToggleValues'].ft_any_key_c?.enabled ?? false;
    });
  }
}
