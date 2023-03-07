import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface User {
  role: string;
  username: string;
  name: string;
  email: string;
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  isMobile: boolean = false;
  loginForm: FormGroup;

  constructor(private breakpointObserver: BreakpointObserver, private http : HttpClient) {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.breakpointObserver.observe(Breakpoints.Handset).subscribe((result) => {
      this.isMobile = result.matches;
    });
  }

  onSubmit() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    this.http
      .post<User>(
        'http://192.168.0.134:9090/login',
        this.loginForm.value,
        httpOptions
      )
      .subscribe((result) => {
        console.log(`${result.email}`);
      });
  }
}
