import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {
  isMobile: boolean = false;
  loginForm: FormGroup;
  


  constructor(private breakpointObserver: BreakpointObserver){
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
    this.breakpointObserver.observe(Breakpoints.Handset).subscribe(result => {
      this.isMobile = result.matches;
    })
  }

  onSubmit(){

  }

}
