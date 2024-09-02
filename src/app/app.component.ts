import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoaderService } from './services/loader/loader.service';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { WebsocketService } from './services/websockets/websocket.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'money-fe';
  constructor(
    private loaderService: LoaderService,
    private websocketService: WebsocketService,
  ) {}

  ngOnInit() {
    this.websocketService.subscribeToGetMessageEvent();
  }

  get isLoading(): boolean {
    return this.loaderService.loading;
  }
}
