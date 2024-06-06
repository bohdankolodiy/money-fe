import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,

    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'payment',
      },
      {
        path: 'payment',
        loadComponent: () =>
          import('./payment/payment.component').then((m) => m.PaymentComponent),
      },
      {
        path: 'transfers',
        loadComponent: () =>
          import('./transfers/transfers.component').then(
            (m) => m.TransfersComponent,
          ),
      },
      {
        path: 'history',
        loadComponent: () =>
          import('./history/history.component').then((m) => m.HistoryComponent),
      },
    ],
  },
];
