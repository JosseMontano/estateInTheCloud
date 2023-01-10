import Config from "./config";

export const http = Config.backendUrlDev;
/* export const http = Config.backendUrlProd; */

export const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};
