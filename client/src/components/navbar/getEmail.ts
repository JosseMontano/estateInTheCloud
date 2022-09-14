import { getEmail } from "../../services/auth";


export const HandlerGetNameUser = async () => {
  var nameUser;
  const res = await getEmail();
  nameUser = res.username;
  return nameUser;
};

export const HandlerGetEmail = async () => {
  var emailUser;
  const res = await getEmail();
  emailUser = res.email
  return emailUser;
};

export const HandlerGetId = async () => {
  var idUser;
  const res = await getEmail();
  idUser = res.id
  return idUser;
};




