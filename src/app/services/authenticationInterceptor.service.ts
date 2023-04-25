import { Inject, Injectable, Injector } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpHeaders,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from './user/user.service';

@Injectable()
export class AuthenticationInterceptorService implements HttpInterceptor {

    constructor(
        //private userService: UserService,
        private router: Router, private injector: Injector) { }

    count: number = 0;

    private handleAuthError(err: HttpErrorResponse): Observable<any> {
        //handle your auth error or rethrow
        if (err.status === 401 || err.status === 403) {
            //navigate /delete cookies or whatever
            localStorage.setItem("email", "");
            localStorage.setItem("nomeUsuario", "");
            localStorage.setItem('mpManagerToken', "");
            this.router.navigate(['/login']);
            // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.
            return of(err.message); // or EMPTY may be appropriate here
        }
        return throwError(err);
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let token = localStorage.getItem('mpManagerToken');
        if (token) {
            const authReq = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });

            return next.handle(authReq).pipe(tap(() => { },
                (err: any) => {
                    if (err instanceof HttpErrorResponse) {
                        if (err.status !== 401) {
                            if (err.status === 403) {
                                localStorage.setItem("email", "");
                                localStorage.setItem("nomeUsuario", "");
                                localStorage.setItem('mpManagerToken', "");
                                this.router.navigate(['/home']);
                                return;
                            } else
                                return;
                        }
                        localStorage.setItem("email", "");
                        localStorage.setItem("nomeUsuario", "");
                        localStorage.setItem('mpManagerToken', "");
                        this.router.navigate(['/login']);
                    }

                }
            ));
        }

        return next.handle(req).pipe(tap(() => { },
            (err: any) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status !== 401) {
                        return;
                    }
                    localStorage.setItem("email", "");
                    localStorage.setItem("nomeUsuario", "");
                    localStorage.setItem('mpManagerToken', "");
                    this.router.navigate(['/login']);
                }
            }
        ));
    }
}