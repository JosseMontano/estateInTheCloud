interface ConfigType {
  backendUrl: string;
  backendExpressUrl: string;
  backendExpressUrlWs: string;
  backendPython: string;
}
const config: ConfigType = {
  backendUrl: "http://10.0.2.2:4000/api/",
  backendExpressUrl: "http://10.0.2.2:3000/",
  backendExpressUrlWs: "ws://10.0.2.2:3000/graphql",
  backendPython: "http://127.0.0.1:5000/api/",
};

export default config;
