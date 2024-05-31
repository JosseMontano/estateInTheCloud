const { servers } = require("../config");

export const translateToSpanish = async (text: string) => {
  const val = await translateEnglishToSpanish(text);
  return val;
};

export const translateEnglishToSpanish = async (
  msg: string
): Promise<string> => {
  const url = servers.serverPy + "translate-en-es";
  const { json } = await postService(url, msg);
  //@ts-ignore
  const { val } = json;
  return val;
};

export const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  

export async function postService<T>(
    url: string,
    msg: string
  ): Promise<{ json: T; status: number }> {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        val: msg,
      }),
    });
    console.log(msg)
    const json = await response.json();
    const status = response.status;
    return { json, status };
  }
  