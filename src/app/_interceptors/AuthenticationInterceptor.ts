import {HttpInterceptor,HttpRequest,HttpHandler,HttpEvent,} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../_services/authentication.service';
  
@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

    constructor(private _authService: AuthenticationService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(req.url.startsWith(environment.apiUrl)){
            console.log("Add token: " + req.url);
            if (this._authService.token.length) {
                const clonedRequest = req.clone({
                    headers: req.headers.set(
                    'Authorization',
                    `Bearer ${this._authService.token}`
                    ),
                });
                return next.handle(clonedRequest);
                }
        }
        return next.handle(req);
    }
}