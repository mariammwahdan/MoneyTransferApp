export interface TransactionsObj {
  transactions: Transaction[];
}

export interface Transaction {
  transactionId: number;
  fromAccount: string;
  toAccount: string;
  amount: number;
  status: boolean;
  timestamp: string;
}
