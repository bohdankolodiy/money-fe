import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavBarComponent } from '../../shared/components/nav-bar/nav-bar.component';
import { PaymentComponent } from './payment/payment.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatSidenavModule, NavBarComponent, PaymentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
