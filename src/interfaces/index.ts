export interface IUser {
  id?: number;
  username: string;
  classe?: string;
  level?: number;
  password: string;
}

export interface IProduct {
  id?: number;
  name?: string;
  amount?: string;
}

export interface IOrder {
  id?: number;
  userID?: number;
  productsIds?: Array<number>;
}
