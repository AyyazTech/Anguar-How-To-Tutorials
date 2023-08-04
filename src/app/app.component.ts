import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  processing = false;
  showSuccessMessage = false;
  form: FormGroup = this.fb.group({
    email: [''],
    password: [''],
  });
  constructor(private fb: FormBuilder) {}

  submit() {
    this.showSuccessMessage = false;
    this.processing = true;
    console.log(this.form.value);
    setTimeout(() => {
      this.form.reset();
      this.processing = false;
      this.showSuccessMessage = true;

      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 2000);
    }, 4000);
  }
}
