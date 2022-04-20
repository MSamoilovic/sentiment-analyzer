import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  CreateUser() {
    const {email, password} = this.registerForm.value;
    this.authService.Signup(email, password).then(res => {
      this.router.navigate(['']);
    })
  }

}
