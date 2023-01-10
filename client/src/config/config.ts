/* import 'vite/client'  */
interface EnvType {
  backendUrlDev: string;
  backendUrlProd: String;
  frontendUrlDev: string;
}
/* const env:EnvType = {
  backendUrlDev: import.meta.env.VITE_BACKEND_URL_DEV,
  backendUrlProd: import.meta.env.VITE_BACKEND_URL_PROD,
};
 */

const env: EnvType = {
  backendUrlDev: "http://localhost:3000/",
  backendUrlProd: "https://realestate-server-production.up.railway.app/",
  frontendUrlDev: "http://127.0.0.1:5173/#/",
};

export default env;
