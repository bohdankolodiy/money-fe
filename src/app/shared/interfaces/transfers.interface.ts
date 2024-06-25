export interface ITransfer {
  id: number;
  date: string;
  action: string;
  amount: number;
  card?: string;
  wallet?: string;
}

export interface ITransferBody {
  amount: number;
  card?: string;
  wallet?: string;
}
