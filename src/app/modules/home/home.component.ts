import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavBarComponent } from '../../shared/components/nav-bar/nav-bar.component';
import { TransfersComponent } from './transfers/transfers.component';
import { RouterOutlet } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { Subject, takeUntil } from 'rxjs';

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
export class HomeComponent implements OnInit, OnDestroy {
  private $destroy: Subject<boolean> = new Subject();
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.userService.getUser().pipe(takeUntil(this.$destroy)).subscribe();
  }

  ngOnDestroy(): void {
    this.$destroy.next(true);
    this.$destroy.complete();
  }
}
