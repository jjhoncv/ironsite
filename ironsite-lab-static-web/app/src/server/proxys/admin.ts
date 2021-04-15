import { createProxyMiddleware as proxy } from "http-proxy-middleware";

export const proxyAdmin = () =>
  proxy("/admin", {
    target: "http://ironsite-lab-spa-admin:5000",
    changeOrigin: true,
  });
