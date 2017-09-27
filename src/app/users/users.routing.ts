import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'new', component: FormComponent },
  { path: ':id/edit', component: FormComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
