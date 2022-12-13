/* import 'vite/client'  */

interface EnvType{
  backendUrlDev:string;
  backendUrlProd:String;
}
/* const env:EnvType = {
  backendUrlDev: import.meta.env.VITE_BACKEND_URL_DEV,
  backendUrlProd: import.meta.env.VITE_BACKEND_URL_PROD,
};
 */

const env:EnvType = {
  backendUrlDev: "https://realestate-server-production.up.railway.app/",
  backendUrlProd: "http://localhost:3000/",
};


export default env;
