import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  form: FormGroup = this.fb.group({
    username: [''],
    password: [''],
  });
  constructor(private fb: FormBuilder, public authService: AuthService) {}

  submit() {
    this.authService
      .login(this.form.value.username, this.form.value.password)
      .subscribe((r) => {
        alert('Congratulations!! You have been logged in successfully');
      });
  }
}
