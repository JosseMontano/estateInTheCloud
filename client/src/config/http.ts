import Config from "./config";
import { Token } from "../global/utilities/getTokenCookie";

export const http = Config.backendUrlDev;
export const httpWS = Config.backendUrlDevWS;
export const httpGo = Config.backendUrlDevGo; 
export const httpPy = Config.backendUrlDevPy; 

  /* export const http = Config.backendUrlProd;
export const httpWS = Config.backendUrlProdWS 
export const httpGo = Config.backendUrlProdGo;  */ 

export const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "authorization":Token
};
