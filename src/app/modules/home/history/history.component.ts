import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { TransactTypes } from '../../../shared/enums/transact-types.enum';
import { ITransacts } from '../../../shared/interfaces/trannsacts.interface';
import { ITransfer } from '../../../shared/interfaces/transfers.interface';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [
    HeaderComponent,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    CommonModule,
  ],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss',
})
export class HistoryComponent {
  search: FormControl<string | null> = new FormControl(null);
  transacts: ITransacts[] = [
    {
      id: 0,
      amount: 1000,
      date: '06/06/2024',
      items: [
        {
          id: 1,
          date: '06/06/2024',
          action: 'deposit',
          amount: 12,
          card: '1234123412431324',
        },
        {
          id: 2,
          date: '06/06/2024',
          action: 'withdrawal',
          amount: 12,
          card: '1234123412431324',
        },
        {
          id: 2,
          date: '06/06/2024',
          action: 'payment',
          amount: 12,
          wallet: '1234123412431324',
        },
      ],
    },
    {
      id: 1,
      amount: 1000,
      date: '05/06/2024',
      items: [
        {
          id: 1,
          date: '06/06/2024',
          action: 'deposit',
          amount: 12,
          card: '1234123412431324',
        },
        {
          id: 2,
          date: '06/06/2024',
          action: 'withdrawal',
          amount: 12,
          card: '1234123412431324',
        },
        {
          id: 2,
          date: '06/06/2024',
          action: 'payment',
          amount: 12,
          wallet: '1234123412431324',
        },
      ],
    },
    {
      id: 2,
      amount: 1000,
      date: '05/05/2024',
      items: [
        {
          id: 1,
          date: '06/06/2024',
          action: 'deposit',
          amount: 12,
          card: '1234123412431324',
        },
        {
          id: 2,
          date: '06/06/2024',
          action: 'withdrawal',
          amount: 12,
          card: '1234123412431324',
        },
        {
          id: 2,
          date: '06/06/2024',
          action: 'payment',
          amount: 12,
          wallet: '1234123412431324',
        },
      ],
    },
  ];

  isReciever(item: ITransfer): boolean {
    return Boolean(
      item.action === TransactTypes.DEPOSIT ||
        item.action === TransactTypes.INCOME,
    );
  }

  getDate(item: ITransacts): string {
    const transactsDate = new Date(item.date).toDateString();
    return new Date().toDateString() === transactsDate
      ? 'Today'
      : transactsDate;
  }
}
