import { Routes } from '@angular/router';
import { authGuard } from './services/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'summary',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/summary/summary').then((m) => m.Summary),
  },
  {
    path: 'add-task',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/add-task/add-task').then((m) => m.AddTask),
  },
  {
    path: 'board',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/boards/board/board').then((m) => m.Board),
  },
  {
    path: 'contacts',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/contacts/contacts/contacts').then((m) => m.Contacts),
  },
  { path: 'login', loadComponent: () => import('./pages/login/login').then((m) => m.Login) },
  { path: 'info', redirectTo: 'info/legal', pathMatch: 'full' },
  { path: 'info/:view', loadComponent: () => import('./pages/info/info').then((m) => m.Info) },
];
