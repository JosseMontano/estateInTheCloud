export const saveCookie = (val: string, name:string) => {
  document.cookie = `${name}=${val}; max-age=${
    60 * 60 * 24
  }; path=/; samesite=stric`;
};
export default saveCookie;