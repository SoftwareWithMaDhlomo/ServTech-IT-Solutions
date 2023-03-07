import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface ChuckNorrisJoke {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
})
export class RegistrationPageComponent implements OnInit {
  isMobile: boolean = false;
  name: string = '';
  email: string = '';
  username: string = '';
  password: string = '';

  constructor(
    private breakpointObserver: BreakpointObserver,
    private http: HttpClient
  ) {}

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

    let body = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password,
    };

    this.http
      .post<ChuckNorrisJoke>(
        'http://192.168.0.134:9090/api/registration',
        body,
        httpOptions
      )
      .subscribe((result) => {
        console.log(result.value);
      });
  }
}
