import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./modules/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'registration',
    loadComponent: () =>
      import('./modules/registration/registration.component').then(
        (m) => m.RegistrationComponent
      ),
  },
  {
    path: 'wait-email/:title',
    loadComponent: () =>
      import('./shared/components/wait-email/wait-email.component').then(
        (m) => m.WaitEmailComponent
      ),
  },
  {
    path: 'forget-password',
    loadComponent: () =>
      import(
        './shared/components/forget-password/forget-password.component'
      ).then((m) => m.ForgetPasswordComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      import(
        './modules/home/home.component'
      ).then((m) => m.HomeComponent),
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
