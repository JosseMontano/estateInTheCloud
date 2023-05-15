interface ConfigType {
  backendUrl: string;
  backendExpressUrl: string;
  backendExpressUrlWs: string;
}
const config: ConfigType = {
  backendUrl: "http://10.0.2.2:4000/api/",
  backendExpressUrl: "http://10.0.2.2:3000/",
  backendExpressUrlWs: "ws://10.0.2.2:3000/graphql",
};

export default config;
