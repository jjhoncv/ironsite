import express, { Application, Router } from "express";
import cors from "cors";
import { siteRoutes, adminRoutes } from "./routes";
import path from "path";
import "./utils/config";

import { testConnectionApi } from "./utils/testConnectionApi";
import { proxyAdmin } from "./proxys/admin";

const App = () => {
  const app: Application = express();

  const middlewares = () => {
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
  };

  const proxys = () => {
    process.env.NODE_ENV
      ? app.use("/admin", express.static(path.join(__dirname, "public/admin")))
      : app.use(proxyAdmin());
  };

  const statics = () => {
    app.use("/statics", express.static(path.join(__dirname, "public/statics")));
    app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));
    app.use(
      "/favicon.ico",
      express.static(path.join(__dirname, "public/favicon.ico"))
    );
  };

  const routes = () => {
    const router: Router = Router();
    router.use("/admin", adminRoutes);
    router.use("/", siteRoutes);
    app.use("/", router);
  };

  const init = () => {
    middlewares();
    proxys();
    statics();
    routes();
    app.listen(process.env.SERVER_PORT);
    console.log(
      "Server WEB on " + process.env.SERVER_HOST + ":" + process.env.SERVER_PORT
    );
    (async () => {
      console.info(await testConnectionApi());
    })();
  };

  return {
    init,
  };
};

async function main() {
  const app = App();
  app.init();
}

main();
