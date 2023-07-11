import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  ftAnyKeyA: boolean = false;
  ftAnyKeyC: boolean = false;

  constructor(private activatedRoute: ActivatedRoute) {
    this.getFeatureToggle();
  }

  getFeatureToggle(): void {
    this.activatedRoute.data.subscribe((data: any) => {
      const ftKeyAIsEnable: boolean =
        data?.featureToggleValues.ft_any_key_a.enabled;
      const ftKeyCIsEnable: boolean =
        data?.featureToggleValues.ft_any_key_b.enabled;

      this.ftAnyKeyA = ftKeyAIsEnable ? ftKeyAIsEnable : false;
      this.ftAnyKeyC = ftKeyCIsEnable ? ftKeyCIsEnable : false;
    });
  }
}
