interface EnvType {
  backendUrlDev: string;
  backendUrlDevWS: string;
  backendUrlProd: string;
  backendUrlProdWS: string;
}

const env: EnvType = {
  backendUrlDev: import.meta.env.VITE_BACKEND_URL_DEV,
  backendUrlProd: import.meta.env.VITE_BACKEND_URL_PROD,
  backendUrlDevWS: import.meta.env.VITE_BACKEND_ULR_DEV_WS,
  backendUrlProdWS: import.meta.env.VITE_BACKEND_URL_PROD_WS,
};

export default env;
