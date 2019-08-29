import { Component, OnInit, OnDestroy } from '@angular/core';
import { LyTheme2, ThemeVariables } from '@alyle/ui';
import { Router, ActivatedRoute } from '@angular/router';
import { SwPush } from '@angular/service-worker';
import { AuthService } from './services/auth/auth.service';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  auth$: Subscription;

  constructor(
    private swPush: SwPush,
    private authService: AuthService) {
    this.fetchUrlPath();
  }

  fetchUrlPath() {
    const path = window.location.pathname;
    localStorage.setItem('path', path);
  }

  subscribeToNotifications() {
    this.swPush.requestSubscription({
      serverPublicKey: environment.NOTIFICATION_KEY
    }).then(res => {
      this.authService.onSubscribeToNotification(res).subscribe(status => {
        console.log('====================================');
        console.log(status);
        console.log('====================================');
      });
    }).catch(rej => {
      console.error('====================================');
      console.error(rej);
      console.error('====================================');
    });
  }

  ngOnInit() {
    this.auth$ = this.authService.user$.subscribe(user => {
      if (user) {
        this.subscribeToNotifications();
      }
    });
  }

  ngOnDestroy() {
    if (this.auth$) {
      this.auth$.unsubscribe();
    }
  }



}
