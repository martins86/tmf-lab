import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';

@Injectable()
export class TimeoutInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const timeoutDuration = 10000; // 10 seconds
    return next.handle(request).pipe(
      timeout(timeoutDuration),
      catchError((error) => {
        if (error.name === 'TimeoutError') {
          console.error('Request timed out:', request.url);
          return throwError(() => 'Request timed out');
        }
        return throwError(() => error);
      })
    );
  }
}
