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
    this.LoadFeatureToggleValues();
  }

  LoadFeatureToggleValues(): void {
    this.activatedRoute.data.subscribe((data: Data) => {
      const ftKeyAIsEnable: boolean =
        data?.['featureToggleValues'].ft_any_key_a.enabled;
      const ftKeyCIsEnable: boolean =
        data?.['featureToggleValues'].ft_any_key_b.enabled;

      this.ftAnyKeyA = ftKeyAIsEnable ? ftKeyAIsEnable : false;
      this.ftAnyKeyC = ftKeyCIsEnable ? ftKeyCIsEnable : false;
    });
  }
}
