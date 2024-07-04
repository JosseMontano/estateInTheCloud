
//@ts-ignore
import { EXPO_PUBLIC_CLIENT_ID_GOOGLE, EXPO_PUBLIC_BACK_GOOGLE, EXPO_PUBLIC_API_GOOGLE, EXPO_PUBLIC_OUATH_GOOGLE } from '@env'
interface ConfigType {
  backendUrl: string;
  backendExpressUrl: string;
  backendExpressUrlWs: string;
  backendPython: string;

  clientIdGoogle: string;
  backGoogle: string;
  apiGoogle: string;
  oauthGoogle: string;

}
const config: ConfigType = {
  backendUrl: "http://10.0.2.2:9000/api/",
  backendExpressUrl: "http://10.0.2.2:3000/",
  backendExpressUrlWs: "ws://10.0.2.2:3000/graphql",
  backendPython: "http://10.0.2.2:5000/api/",
  clientIdGoogle: EXPO_PUBLIC_CLIENT_ID_GOOGLE,
  backGoogle: EXPO_PUBLIC_BACK_GOOGLE,
  apiGoogle: EXPO_PUBLIC_API_GOOGLE,
  oauthGoogle: EXPO_PUBLIC_OUATH_GOOGLE
};


export default config;
