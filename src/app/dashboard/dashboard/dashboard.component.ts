import { Component, OnInit } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth'
import { AuthService } from 'src/app/shared/services/auth-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  Logout() {
    this.auth.Logout(); 
  }
}
