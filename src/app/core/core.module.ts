import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersService } from './users/users.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    UsersService
  ]
})
export class CoreModule { }
