import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', loadChildren: './users/users.module#UsersModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
