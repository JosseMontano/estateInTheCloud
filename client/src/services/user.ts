import { headers, http } from "./http";
import { index } from "../utilities/getServices";
import { FormRecuperateAccount } from "@/interface/formAuth";

export const getUser = async <T>(
  email?: string
): Promise<{ json: T; status: number }> => {
  const url = `${http}getUserPhotoProfile/${email}`;
  const { json, status } = await index<T>(url);
  return { json, status };
};

export const getUserById = async (id?: number) => {
  const url = `${http}getUserComplete/${id}`;
  const { json, status } = await index(url);
  return { json, status };
};

export const sendCodeGmail = async (form: FormRecuperateAccount) => {
  try {
    const response = await fetch(`${http}recuperateAccount/${form.email}`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({}),
    });
    if (response.status === 200) {
      return true;
    }
  } catch (err) {
    console.error(err);
  }
};

export const recuperateAccount = async (form: FormRecuperateAccount) => {
  try {
    const response = await fetch(`${http}changePassword`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        email: form.email,
        password: form.password,
        codeEmail: form.codeGmail,
      }),
    });
    if (response.status === 200) {
      return true;
    }
  } catch (err) {
    console.error(err);
  }
};
