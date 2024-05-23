export interface FormLogin {
  email: string;
  password: string;
}

export interface FormLoginGoogle {
  photoURL: string;
  email: string;
  displayName: string;
  uid: string;
  phoneNumber: string;
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
