export interface FormLogin {
  email: string;
  password: string;
}

export interface FormRegister {
  email: string;
  username: string;
  numberPhone: string;
  password: string;
}

export interface FormRecuperateAccount {
  email: string;
  password: string;
  codeGmail: string;
}
