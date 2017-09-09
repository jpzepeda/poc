import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { User } from '../_models/user';

@Injectable()
export class LoginService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private url = 'http://localhost:8090/login';

  constructor(private http: Http) { }

  login (username: string, password: string): Promise<User> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let user = new User();
    user.username = username;
    user.password = password;
    console.log(user);
    let userData = JSON.stringify({ username, password });
    console.log(userData);
    return this.http.post(this.url, userData, { headers: this.headers })
        .toPromise()
        .then(res => res.json().data as User)
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
  }
}
