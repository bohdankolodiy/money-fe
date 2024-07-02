export interface ITransfer {
  id: string;
  date: string;
  action: string;
  amount: number;
  status: string;
  comment: string;
  card?: string;
  wallet?: string;
}

export interface ITransferBody {
  amount: number;
}

export interface ITransferResponse {
  balance: number;
}
