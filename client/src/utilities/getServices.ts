export async function index<T>(
  url: string
): Promise<{ json: T; status: number }> {
  const response = await fetch(url, {
    method: "GET",
  });
  const json = await response.json();
  const status = response.status;
  return { json, status };
}
