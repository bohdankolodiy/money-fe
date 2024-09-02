import {
  Component,
  DestroyRef,
  effect,
  HostListener,
  signal,
} from '@angular/core';
import { WalletPipe } from '../../../shared/pipes/wallet.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NewChatModalComponent } from '../../../shared/components/modals/new-chat-modal/new-chat-modal.component';
import { MatDividerModule } from '@angular/material/divider';
import { ChatService } from '../../../services/chat/chat.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter, Observable, switchMap, tap } from 'rxjs';
import {
  IChatBody,
  IChatResponse,
  IMessages,
  IMessagesResponce,
} from '../../../shared/interfaces/chat.interface';
import { UserService } from '../../../services/user/user.service';
import { WebsocketService } from '../../../services/websockets/websocket.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    WalletPipe,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatDividerModule,
    DatePipe,
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {
  search: FormControl<string | null> = new FormControl(null);
  text: FormControl<string | null> = new FormControl(null);

  selectedChat = signal<IChatResponse | null>(null);
  chats: IChatResponse[] = [];
  messages: IMessagesResponce[] = [];

  constructor(
    private dialog: MatDialog,
    private chatService: ChatService,
    private userService: UserService,
    private df: DestroyRef,
    private webSocketService: WebsocketService,
  ) {
    effect(
      () => {
        if (this.selectedChat()) {
          this.getMessages().subscribe((res) => (this.messages = res));
        } else {
          this.messages = [];
        }
      },
      { allowSignalWrites: true },
    );
  }
  @HostListener('document:keydown.enter', ['$event']) onKeydownHandler() {
    this.onSend();
  }

  ngOnInit(): void {
    this.getChats();
    this.subscribeToNewMassage();
  }

  subscribeToNewMassage() {
    this.webSocketService.getMessage
      .pipe(
        takeUntilDestroyed(this.df),
        filter((data) => !!data),
        switchMap(() => this.getMessages()),
      )
      .subscribe((res) => (this.messages = res));
  }

  getMessages(): Observable<IMessagesResponce[]> {
    return this.chatService.getChatMessage(this.selectedChat()!.chat_id);
  }

  getChats() {
    this.chatService
      .getUserChats()
      .pipe(takeUntilDestroyed(this.df))
      .subscribe((res) => (this.chats = res));
  }

  openNewChatModal() {
    this.dialog
      .open(NewChatModalComponent, {
        width: 'initial',
        enterAnimationDuration: '500ms',
        exitAnimationDuration: '500ms',
        data: {
          title: 'New Chat',
          chats: this.chats ?? [],
        },
      })
      .afterClosed()
      .pipe(
        takeUntilDestroyed(this.df),
        filter((res) => !!res),
        switchMap((res: IChatBody) => this.chatService.createChat(res)),
        tap((res) => this.selectedChat.set(res)),
      )
      .subscribe(() => this.getChats());
  }

  getChatTitle(chat: IChatResponse): string {
    return chat.user1_id === this.userService.getCookieUser().id
      ? chat.wallet_1
      : chat.wallet_2;
  }

  isSender(message: IMessages): boolean {
    return message.sender_id === this.userService.getCookieUser().id;
  }

  onSelectChat(chat: IChatResponse) {
    this.selectedChat.set(chat);
  }

  onSend() {
    if (!this.text.value) return;
    const body = {
      chat_id: this.selectedChat()!.chat_id,
      text: this.text.value?.toString().trim(),
      sender_id: this.userService.getCookieUser().id,
    };

    this.text.reset();

    this.chatService
      .addMessage(body)
      .pipe(
        takeUntilDestroyed(this.df),
        switchMap(() => this.getMessages()),
      )
      .subscribe((res) => (this.messages = res));
  }

  isToday(date: string): boolean {
    return (
      new Date(date).setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0)
    );
  }

  getTime(date: string): string {
    return `${new Date(date).getHours()}:${new Date(date).getMinutes()}`;
  }
}
