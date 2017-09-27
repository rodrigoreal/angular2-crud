import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { UsersService, User } from '../core/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: Observable<User[]>;
  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit() {
    this.users = this.usersService.getAll();
  }

  addUser() {
    this.router.navigate(['users/new']);
  }

  editUser(user: User) {
    this.router.navigate([`users/${user.id}/edit`]);
  }

  deleteUser(user: User) {
    this.usersService.delete(user.id).subscribe(() => {});
  }
}
