import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmationModalComponent } from '../../../shared/components/confirmation-modal/confirmation-modal.component';
import { filter } from 'rxjs';

enum transfers {
  DEPOSIT = 'deposit',
  WITHDRAWAL = 'withdrawal',
}

@Component({
  selector: 'app-transfers',
  standalone: true,
  imports: [
    MatButtonToggleModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
  ],
  templateUrl: './transfers.component.html',
  styleUrl: './transfers.component.scss',
})
export class TransfersComponent {
  _dialog = inject(MatDialog);
  transferType: string = transfers.DEPOSIT;
  transfersForm: FormGroup = new FormGroup({
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.maxLength(16),
      Validators.minLength(16),
    ]),
    amount: new FormControl('', [Validators.required]),
  });

  get cardNumbber(): AbstractControl {
    return this.transfersForm.get('cardNumber')!;
  }

  get amount(): AbstractControl {
    return this.transfersForm.get('amount')!;
  }

  get cardNumberError() {
    return this.cardNumbber.hasError('required')
      ? 'Field is required'
      : 'Field has to be equal 16 symbols';
  }

  get buttonText(): string {
    return this.transferType == transfers.DEPOSIT
      ? 'Send money to wallet'
      : 'Send money to card';
  }

  async sendMoney() {
    if (this.transfersForm.invalid) return;
    const body = {
      ...this.transfersForm.getRawValue(),
      type: this.transferType,
    };

    console.log(body);

    if (!(await this.opneConfirmModal())) return;
  }

  async opneConfirmModal() {
    return await this._dialog
      .open(ConfirmationModalComponent, {
        width: '250px',
        enterAnimationDuration: '500ms',
        exitAnimationDuration: '500ms',
        data: {
          title: 'Confirm transfer',
          text: 'Do you want to send your money?',
        },
      })
      .afterClosed()
      .pipe(filter((res) => res))
      .toPromise();
  }
}
