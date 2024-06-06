import { ITransfer } from './transfers.interface';

export interface ITransacts {
  id: number;
  items: ITransfer[];
  amount: number;
  date: string;
}
