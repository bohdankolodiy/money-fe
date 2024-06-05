import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss',
})
export class PaymentComponent {
  paymentForm: FormGroup = new FormGroup({
    recieverWallet: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16),
    ]),
    amount: new FormControl('', [Validators.required]),
    comment: new FormControl(''),
  });

  get recieverWallet(): AbstractControl {
    return this.paymentForm.get('recieverWallet')!;
  }
  get amount(): AbstractControl {
    return this.paymentForm.get('recieverWallet')!;
  }
  get comment(): AbstractControl {
    return this.paymentForm.get('recieverWallet')!;
  }
}
