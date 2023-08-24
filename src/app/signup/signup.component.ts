import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {


  signupData = { email: '', password: '' };

  onSignUp() {
    // Implement signup logic here
    console.log('Sign Up:', this.signupData);
  }
}
