import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavBarComponent } from '../../shared/components/nav-bar/nav-bar.component';
import { TransfersComponent } from './transfers/transfers.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatSidenavModule,
    NavBarComponent,
    TransfersComponent,
    RouterOutlet,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
