import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatInputModule } from '@angular/material';

import { UsersComponent } from './users.component';
import { FormComponent } from './form/form.component';
import { routing } from './users.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    MatButtonModule,
    MatCardModule,
    MatInputModule
  ],
  declarations: [
    UsersComponent,
    FormComponent
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatInputModule
  ]
})
export class UsersModule { }
