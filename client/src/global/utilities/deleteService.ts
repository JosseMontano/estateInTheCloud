import { Token } from "./getTokenCookie";

const deleteServ = async (url: string) => {
    try {
      console.log(Token)
      const response = await fetch(url, {
        method: "DELETE",
        headers:{
          "authorization":Token
        },
      });
  
      if (response.ok) {
        const result = await response.json();
        return result;
      }
      console.log(response)
    } catch (err) {
      console.error(err);
    }
  };
  export default deleteServ;