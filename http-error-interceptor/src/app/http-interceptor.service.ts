import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, retry, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class HttpInterceptorService implements HttpInterceptorService {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      retry(1),
      catchError((errResponse: HttpErrorResponse) => {
        let errorMessage = "";
        if (errResponse instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${errResponse.error.message}`;
        } else {
          // server-side error
          errorMessage = `Error Code: ${errResponse.status}\nMessage: ${
            errResponse.message
          }`;
        }
        console.error(errResponse);
        return throwError(errorMessage);
      })
    );
  }
}
