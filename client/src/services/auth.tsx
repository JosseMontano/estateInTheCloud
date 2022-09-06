import { http } from "./http";

export const signIn = async (email: string, password: string) => {
  const response = await fetch(`${http}signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const result = await response.json();
  return result;
};

export const signUp = async (
  username: string,
  email: string,
  password: string
) => {
  const response = await fetch(`${http}signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });

  const result = await response.json();
  return result;
};
