import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, first, of, tap } from 'rxjs';

import { IFeatureToggle } from '@interfaces/ifeature-toggle.interface';

import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FeatureToggleService {
  private readonly API = environment.apiFt;

  constructor(private httpClient: HttpClient) {}

  getFeatureToggles(
    featureToggleKeys: string[]
  ): Observable<IFeatureToggle | null> {
    return this.httpClient.get<IFeatureToggle>(this.API).pipe(
      first(),
      tap((response) => {
        return this.formatFeatureToggle(featureToggleKeys, response);
      }),
      catchError(() => {
        return of(null);
      })
    );
  }

  formatFeatureToggle(
    featureToggleKeys: string[],
    response: IFeatureToggle
  ): IFeatureToggle {
    const featureToggles: any = {};

    Object.keys(response).forEach((key: any) => {
      if (featureToggleKeys.includes(key)) {
        featureToggles[key] = response[key];
      }
    });

    return featureToggles as IFeatureToggle;
  }
}
