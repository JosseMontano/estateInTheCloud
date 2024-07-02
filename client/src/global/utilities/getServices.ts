import { headers } from "@/config/http";
import { Token } from "./getTokenCookie";

export async function index<T>(
  url: string
): Promise<{ json: T; status: number }> {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      authorization: Token,
    },
  });
  
  const json = await response.json();
  const status = response.status;
  return { json, status };
}

export async function apisExternal<T>(
  url: string
): Promise<{ json: T; status: number }> {
  const response = await fetch(url, {
    method: "GET",
  });
  const json = await response.json();
  const status = response.status;
  return { json, status };
}

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
  const json = await response.json();
  const status = response.status;
  return { json, status };
}
