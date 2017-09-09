import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {

  }

  login() {
      console.log('Hello');
      this.loginService.login(this.model.username, this.model.password);
      this.router.navigate(['home']);
  }

}
