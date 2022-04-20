import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button';
import { RegisterComponent } from './register/register.component'
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card'



@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
