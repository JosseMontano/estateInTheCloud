import { getEmail } from "../../services/auth";

const checkSignIn = (user: string) => {
  if (user != "") {
    return user;
  }
  return "Welcome";
};

const HandlerGetEmail = async () => {
  var nameUser;
  const res = await getEmail();
  nameUser = checkSignIn(res.username);
  return nameUser;
};

export default HandlerGetEmail;

