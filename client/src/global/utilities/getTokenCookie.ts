export const Token = document.cookie.replace("token=", "");

export const deleteCookie = () => {
    document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}
