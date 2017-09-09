import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Anime } from '../_models/anime';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class AnimeService {
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getAll(): Promise<Anime[]> {
    return this.http.get('http://localhost:8090/anime/all')
      .toPromise()
      .then(response => response.json() as Anime[])
      .catch(this.handleError);
  }

  add(name: string): Promise<Anime[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log(name);
    return this.http.get('http://localhost:8090/anime/add?name=' + name, { headers: this.headers })
        .toPromise()
        .then(res => res.json().data)
        .catch(this.handleError);
  }

  update(anime: Anime): Promise<Anime[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log(anime);
    return this.http.put('http://localhost:8090/anime/update?name=' + anime.name + '&id' + anime.id, { headers: this.headers })
        .toPromise()
        .then(res => res.json().data)
        .catch(this.handleError);
  }

  delete(id: string): Promise<Anime[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log(id);
    return this.http.post('http://localhost:8090/anime/delete?id=' + id, { headers: this.headers })
        .toPromise()
        .then(res => res.json().data)
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
