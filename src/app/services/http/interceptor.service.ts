import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })

export class DataInterceptor implements HttpInterceptor {

  constructor(private as: AuthService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = `${environment.REST_URL}/${req.url}`;
    const token = this.as.getToken();
    let reqClone;

    if (token) {
      reqClone = req.clone({
        url,
        headers: req.headers.set('authorization', `Bearer ${token}`)
      });
    } else {
      reqClone = req.clone({
        url
      });
    }
    return next.handle(reqClone);
  }


}
