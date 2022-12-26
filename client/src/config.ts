/* import 'vite/client'  */

interface EnvType {
  backendUrlDev: string;
  backendUrlProd: String;
  img360Url: string;
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
  img360Url: "https://realestate360-db9fa.web.app/",
  frontendUrlDev: "http://localhost:5173/#/",
};

export default env;
