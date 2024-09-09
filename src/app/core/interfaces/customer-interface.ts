
export interface Account {
    id: number;
    accountNumber: string;
    accountType: string;
    balance: number;
    currency: string;
    accountName: string;
    accountDescription: string;
    active: boolean;
    createdAt: string;
    updatedAt: string;
}
export interface Customer {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
    gender: string;
    birthDate: string;
    username: string;
    createdAt: string;
    updatedAt: string;
    accounts: Account[];
}

