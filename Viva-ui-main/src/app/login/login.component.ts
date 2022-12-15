import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Service } from '../services/service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error: string | null = null;

  constructor(
    private service: Service,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    this.error = null;
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.service.login(this.loginForm.value.username, this.loginForm.value.password)
        .subscribe(success => this.router.navigate(['/']));
        //Arrumar para oq fazer depois do login.
    }
  }

}
