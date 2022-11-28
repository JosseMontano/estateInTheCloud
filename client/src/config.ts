interface EnvType{
  backendUrlDev:string;
  backendUrlProd:String;
}
const env:EnvType = {
  backendUrlDev: import.meta.env.VITE_BACKEND_URL_DEV,
  backendUrlProd: import.meta.env.VITE_BACKEND_URL_PROD,
};

export default env;
