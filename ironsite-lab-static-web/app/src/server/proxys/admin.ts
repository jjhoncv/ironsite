import { createProxyMiddleware as proxy } from "http-proxy-middleware";

export const proxyAdmin = () =>
  proxy("/admin", {
    target: process.env.ADMIN_HOST,
    changeOrigin: true,
  });
