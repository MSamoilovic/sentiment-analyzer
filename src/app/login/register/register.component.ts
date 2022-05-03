import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth-service.service';
import { MustMatch } from './paswordMatch.directive';
// import { passwordMatchingValidatior } from './paswordMatch.directive';

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
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required])
    }, {validators: MustMatch('password', 'confirmPassword')})
  }

  CreateUser() {

    if(this.registerForm.invalid) {
      return;
    }

    const {email, password} = this.registerForm.value;
    this.authService.Signup(email, password).then(res => {
      this.router.navigate(['/dashboard']);
    })
  }

}
