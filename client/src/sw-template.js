importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js"
);
import { http } from "./services/http";
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

const { registerRoute } = workbox.routing;
const { CacheFirst, NetworkFirst } = workbox.strategies;

/* 
save route of internet
registerRoute(
  new RegExp("http//bootrap.js"),
  new CacheFirst()
);
 */

/* registerRoute(new RegExp(`${http}me`), new NetworkFirst());
registerRoute(new RegExp(`${http}verifyToken`), new NetworkFirst());
registerRoute(new RegExp(`${http}estate`), new NetworkFirst());
registerRoute(new RegExp(`${http}estateMostRecent`), new NetworkFirst());
registerRoute(new RegExp(`${http}estateRecommendedByUser`), new NetworkFirst());
 */