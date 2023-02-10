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
  userId?: number;
  productsIds?: Array<number>;
}
export interface IResponse {
  status: number;
  message: any;
}

export interface IToken {
  id?: number,
  type?: string,
  message?: string,
}