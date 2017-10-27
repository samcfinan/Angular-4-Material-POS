import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { FormControl, Validators } from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)]);

  emailSent = false;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  resetPassword(email: string) {
    this.auth.resetPassword(email).then(value => this.emailSent = true).catch((error) => this.emailSent = false);
  }

}
