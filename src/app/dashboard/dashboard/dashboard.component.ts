import { Component, OnInit } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth'
import { AuthService } from 'src/app/shared/services/auth-service.service';
import { LexiconService } from 'src/app/shared/services/lexicon.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private auth: AuthService, private lexiconService: LexiconService) { }

  data: any;

  ngOnInit(): void {
    this.getData();
    console.log(this.data);
  }

  getData() {
    this.lexiconService.getLexiconData()
  } 
  
  Logout() {
    this.auth.Logout(); 
  }
}