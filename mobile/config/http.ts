interface ConfigType {
  backendUrl: string;
  backendExpressUrl: string;
  backendExpressUrlWs: string;
  backendPython: string;
}
const config: ConfigType = {
  backendUrl: "http://10.0.2.2:9000/api/",
  backendExpressUrl: "http://10.0.2.2:3000/",
  backendExpressUrlWs: "ws://10.0.2.2:3000/graphql",
  backendPython: "http://10.0.2.2:5000/api/",
};


export default config;
