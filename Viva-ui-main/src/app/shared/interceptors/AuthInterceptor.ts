import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    private readonly AUTH: string = 'Authorization';

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = localStorage.getItem(this.AUTH);

        if (token != null) {
            let headers = req.headers
                .set(this.AUTH, token);

            req = req.clone({ headers });
        }

        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                return this.verifyTransactionError(req, error);
            })
        );
    }

    verifyTransactionError(req: HttpRequest<any>, error: HttpErrorResponse) : Observable<HttpEvent<any>> {
        if (error.status === 401 || error.status === 403) {
            localStorage.removeItem(this.AUTH);
        }
        throw error;
    }
}