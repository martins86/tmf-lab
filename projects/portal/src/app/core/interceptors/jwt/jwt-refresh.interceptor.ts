// import { Injectable } from '@angular/core';
// import {
//   HttpInterceptor,
//   HttpRequest,
//   HttpHandler,
//   HttpErrorResponse,
// } from '@angular/common/http';
// import { AuthService } from './auth.service';
// import { catchError, switchMap } from 'rxjs/operators';
// import { throwError } from 'rxjs';

// @Injectable()
// export class JwtRefreshInterceptor implements HttpInterceptor {
//   constructor(private authService: AuthService) { }

//   intercept(request: HttpRequest<any>, next: HttpHandler) {
//     return next.handle(request).pipe(
//       catchError((error: HttpErrorResponse) => {
//         if (error.status === 401 && error.error && error.error.message === 'Token expired') {
//           // Token expired; attempt to refresh it
//           return this.authService.refreshToken().pipe(
//             switchMap(() => {
//               // Retry the original request with the new token
//               const updatedRequest = request.clone({
//                 setHeaders: {
//                   Authorization: `Bearer ${this.authService.getAccessToken()}`,
//                 },
//               });
//               return next.handle(updatedRequest);
//             }),
//             catchError(() => {
//               // Refresh token failed; log out the user or handle the error
//               // For example, you can redirect to the login page
//               this.authService.logout();
//               return throwError(() => 'Token refresh failed');
//             })
//           );
//         }
//         return throwError(() => error);
//       })
//     );
//   }
// }
