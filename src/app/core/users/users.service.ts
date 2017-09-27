import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { User } from './index';

import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
  url: string;
  constructor(private http: Http) {
    this.url = 'http://localhost:3000/users';
  }

  getAll() {
    return this.http.get(this.url)
      .map(res => res.json());
  }

  get(id: string | number) {
    return this.http.get(`${this.url}/users/${id}`)
      .map(res => res.json());
  }

  add(user: User) {
    return this.http.post(this.url, JSON.stringify(user))
      .map(res => res.json());
  }

  update(user) {
    return this.http.put(`${this.url}/users/${user.id}`, JSON.stringify(user))
      .map(res => res.json());
  }

  delete(id: string | number) {
    return this.http.delete(`${this.url}/users/${id}`)
      .map(res => res.json());
  }
}
