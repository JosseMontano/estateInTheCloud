import Config from "./config";

 export const http = Config.backendUrlDev;
export const httpWS = Config.backendUrlDevWS;  
/* export const http = Config.backendUrlProd;
export const httpWS = Config.backendUrlProdWS */

export const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};
