export class User {
  email: string;
  cashier: true;
  admin: false;

  constructor(authData) {
    this.email = authData.email;
    this.cashier = true;
    this.admin = false;
  }
}
