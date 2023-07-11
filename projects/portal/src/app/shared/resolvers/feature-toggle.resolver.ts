import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';

import { IFeatureToggle } from '@interfaces/ifeature-toggle.interface';
import { FeatureToggleService } from '@services/feature-toggle/feature-toggle.service';

@Injectable({
  providedIn: 'root',
})
export class FeatureToggleResolver implements Resolve<IFeatureToggle | null> {
  constructor(private readonly featureToggleService: FeatureToggleService) {}

  resolve(
    activatedRouteSnapshot: ActivatedRouteSnapshot
  ): Observable<IFeatureToggle | null> {
    const featureToggleKeys: string[] =
      activatedRouteSnapshot.data['featureToggleKeys'];

    return this.featureToggleService.getFeatureToggles(featureToggleKeys).pipe(
      catchError(() => {
        return of(null);
      })
    );
  }
}
