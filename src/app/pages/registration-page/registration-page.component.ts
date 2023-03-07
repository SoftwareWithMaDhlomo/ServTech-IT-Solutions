import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface User {
  role: string;
  username: string;
  name: string;
  email: string;
}

interface FormData {
  name: string;
  username: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
})
export class RegistrationPageComponent implements OnInit {
  isMobile: boolean = false;
  registrationForm: FormGroup;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private http: HttpClient,
    private router: Router
  ) {
    this.registrationForm = new FormGroup({
      name: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
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
        'http://192.168.0.134:9090/api/registration',
        this.registrationForm.value,
        httpOptions
      )
      .subscribe((result) => {
        console.log(`${result.email}, route -> ${this.router.url}`);
      });
  }
}
