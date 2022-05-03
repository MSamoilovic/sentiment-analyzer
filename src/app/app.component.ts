import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from './shared/services/auth-service.service';
import lexicon from 'dataSeed';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'sentiment-analyzer';
  isLoggedIn$: Observable<boolean>;
  isAuthenticated: Subscription;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.auth.isLoggedIn();
    this.isAuthenticated = this.isLoggedIn$.subscribe((res) => {
      if (res) {
        let isDataPresent = JSON.parse(localStorage.getItem('lexicon') || '');

        if (!isDataPresent) {
          localStorage.setItem('lexicon', JSON.stringify(lexicon));
        }
      }
    });
  }

  Signout() {
    this.auth.Logout();
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    this.isAuthenticated.unsubscribe();
  }
}
