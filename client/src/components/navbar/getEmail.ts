import { getEmail } from "../../services/auth";

const checkSignIn = (user: string) => {
  if (user != "") {
    return user;
  }
  return "Welcome";
};

export const HandlerGetNameUser = async () => {
  var nameUser;
  const res = await getEmail();
  nameUser = checkSignIn(res.username);
  return nameUser;
};

export const HandlerGetEmail = async () => {
  var emailUser;
  const res = await getEmail();
  emailUser = res.email
  return emailUser;
};



