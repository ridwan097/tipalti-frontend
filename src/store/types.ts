export interface Transaction {
  id: number;
  amount: number;
  date: string;
  description: string;
  category: string;
  merchant: string;
}

export interface TransactionsResponse {
  currentPage: number;
  next: {
    limit: number;
    page: number;
  };
  totalPages: number;
  transactions: Transaction[];
}
