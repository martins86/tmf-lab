// import { Injectable } from '@angular/core';
// import {
//   HttpInterceptor,
//   HttpRequest,
//   HttpHandler,
// } from '@angular/common/http';
// import { LocaleService } from './locale.service';

// @Injectable()
// export class LocalizationInterceptor implements HttpInterceptor {
//   constructor(private localeService: LocaleService) { }

//   intercept(request: HttpRequest<any>, next: HttpHandler) {
//     const userLocale = this.localeService.getUserLocale();
//     const localizedRequest = request.clone({
//       setHeaders: {
//         'Accept-Language': userLocale,
//       },
//     });
//     return next.handle(localizedRequest);
//   }
// }
