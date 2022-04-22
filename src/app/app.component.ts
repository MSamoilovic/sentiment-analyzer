import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './shared/services/auth-service.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sentiment-analyzer';
  isLoggedIn$: Observable<boolean>;

  constructor(private auth: AuthService, private router: Router, private db: AngularFirestore) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.auth.isLoggedIn();
  }

  Signout() {
    this.auth.Logout();
    this.router.navigate(['/login']);
  }
}
