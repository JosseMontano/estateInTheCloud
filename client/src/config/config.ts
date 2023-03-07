interface EnvType {
  backendUrlDev: string;
  backendUrlDevWS: string;
  backendUrlProd: string;
  backendUrlProdWS: string;
  frontendUrlDev: string;
  backendUrlDevGo: string;
  backendUrlProdGo:string;
}
 
const env: EnvType = {
  backendUrlDev: import.meta.env.VITE_BACKEND_URL_DEV,
  backendUrlProd: import.meta.env.VITE_BACKEND_URL_PROD,
  backendUrlDevWS: import.meta.env.VITE_BACKEND_ULR_DEV_WS,
  backendUrlProdWS: import.meta.env.VITE_BACKEND_URL_PROD_WS,
  frontendUrlDev: import.meta.env.VITE_FRONTEND_URL,
  backendUrlDevGo: import.meta.env.VITE_BACKEND_GO_URL_DEV,
  backendUrlProdGo: import.meta.env.VITE_BACKEND_GO_URL_PROD,
};

export default env;
