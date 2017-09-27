import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { UsersService, User } from '../../core/users';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  user: User;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      website: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.usersService.get(params['id']).subscribe((user) => {
          this.user = user;
          this.form.controls.email.setValue(user.email);
          this.form.controls.name.setValue(user.name);
          this.form.controls.website.setValue(user.website);
        });
      }
    });
  }

  onSubmit() {
    if (this.user) {
      const user: User = {
        id: this.user.id,
        email: this.form.controls.email.value,
        name: this.form.controls.name.value,
        website: this.form.controls.website.value
      };
      this.usersService.update(user).subscribe(() => {
        this.router.navigate(['users']);
      });
    } else {
      this.usersService.add(this.user).subscribe(() => {
        this.router.navigate(['users']);
      });
    }
  }
}
